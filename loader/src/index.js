import { Parser } from "acorn";
import acornWalk from "acorn-walk";
import { generate } from "@jacob-ebey/astring";

import schema from "./options.json";
import { getPreloadChunks } from "./utils";

const parser = Parser.extend();
const walk = acornWalk;

function replaceLazy(node) {}

/**
 * @param {string} source
 */
function loader(source, sourceMap) {
  const options = this.getOptions(schema);
  const callback = this.async();

  (async () => {
    const stats = await this._compiler.$pwrc.safeReadStats();

    if (!stats) {
      callback(new Error("Stats file not found"));
      return;
    }

    const useSourceMap =
      typeof options.sourceMap === "boolean"
        ? options.sourceMap
        : this.sourceMap;

    const ast = parser.parse(source, {
      sourceType: "module",
      ecmaVersion: "latest",
      locations: true,
    });

    const lazyNames = new Set();
    walk.simple(ast, {
      ImportDeclaration(node) {
        if (node.source.value === "@pwrc/preact" && node.specifiers) {
          node.specifiers.forEach((specifier) => {
            if (specifier.imported && specifier.imported.name === "lazy") {
              lazyNames.add(specifier.local.name);
            }
          });
        }
      },
      CallExpression(node) {
        if (!node.callee || !lazyNames.has(node.callee.name)) {
          return;
        }

        if (node.arguments.length > 2) {
          throw new Error("lazy must contain less than two arguments");
        }

        const imported = new Set();

        walk.simple(node, {
          ImportExpression(node) {
            if (node.source && node.source.value) {
              imported.add(node.source.value);
            }
          },
        });

        if (imported.size !== 1) {
          throw new Error("lazy must contain exactly one import expression");
        }

        const preload = getPreloadChunks(stats, Array.from(imported)[0]);

        if (node.arguments.length === 1) {
          node.arguments.push({
            type: "ObjectExpression",
            properties: [],
          });
        }

        node.arguments.push({
          type: "ArrowFunctionExpression",
          expression: true,
          params: [
            {
              type: "Identifier",
              name: "res",
            },
          ],
          body: {
            type: "ConditionalExpression",
            test: {
              type: "LogicalExpression",
              left: {
                type: "Identifier",
                name: "res",
              },
              operator: "&&",
              right: {
                type: "UnaryExpression",
                operator: "!",
                prefix: true,
                argument: {
                  type: "MemberExpression",
                  object: {
                    type: "Identifier",
                    name: "res",
                  },
                  property: {
                    type: "Identifier",
                    name: "preload",
                  },
                  computed: false,
                  optional: false,
                },
              },
            },
            consequent: {
              type: "CallExpression",
              callee: {
                type: "MemberExpression",
                object: {
                  type: "Identifier",
                  name: "Object",
                },
                property: {
                  type: "Identifier",
                  name: "assign",
                },
                computed: false,
                optional: false,
              },
              arguments: [
                {
                  type: "Identifier",
                  name: "res",
                },
                {
                  type: "ObjectExpression",
                  properties: [
                    {
                      type: "Property",
                      method: false,
                      shorthand: false,
                      computed: false,
                      key: {
                        type: "Identifier",
                        name: "preload",
                      },
                      value: {
                        type: "ArrayExpression",
                        elements: preload.map((chunk) => ({
                          type: "Literal",
                          value: chunk,
                        })),
                      },
                      kind: "init",
                    },
                  ],
                },
              ],
              optional: false,
            },
            alternate: {
              type: "Identifier",
              name: "res",
            },
          },
        });
      },
    });

    if (lazyNames.size > 0) {
      const newCode = generate(ast);

      callback(null, newCode);
      return;
    }

    callback(null, source, sourceMap);
  })().catch((err) => callback(err));
}

export default loader;
