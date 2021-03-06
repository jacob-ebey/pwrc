import { h } from "preact";
import { LocationProvider } from "preact-iso/router";
import { minify } from "html-minifier-terser";
import * as hoofd from "hoofd/preact";

import { lazy } from "@pwrc/preact";
import { renderToStringAsync } from "@pwrc/preact/dist/esm/server";

import App from "@pwrc/app";

const hoofdStringify = (title, metas, links, ampScript) => {
  const visited = new Set();
  return `
    ${title ? `<title>${title}</title>` : ""}

    ${
      ampScript
        ? `<script src="${ampScript}" async ${
            ampScript.endsWith("mjs") ? 'type="module"' : ""
          } />`
        : ""
    }

    ${metas.reduce((acc, meta) => {
      if (
        !visited.has(
          meta.charset ? meta.keyword : meta[meta.keyword] || meta.name
        ) &&
        meta.name !== "script"
      ) {
        visited.add(
          meta.charset ? meta.keyword : meta[meta.keyword] || meta.name
        );
        return `${acc}<meta ${meta.keyword || "name"}="${
          meta[meta.keyword] || meta.name
        }"${meta.charset ? "" : ` content="${meta.content}"`}>`;
      }
      return acc;
    }, "")}

    ${links.reduce((acc, link) => {
      return `${acc}<link${Object.keys(link).reduce(
        (properties, key) => `${properties} ${key}="${link[key]}"`,
        ""
      )}>`;
    }, "")}
  `;
};

function renderPreload(preload) {
  let styles = "";
  return (
    preload
      .map((p) => {
        let isScript = p.split("?")[0].endsWith(".js");
        let tag = `<link rel="preload" as="${
          isScript ? "script" : "style"
        }" href="${p}" />`;

        if (!isScript) {
          styles += `<link rel="stylesheet" href="${p}" />`;
        }

        return tag;
      })
      .join("\n") + styles
  );
}

/**
 * @param {string} path
 */
export async function render(path, options) {
  const scripts = (options && options.scripts) || [];
  const styles = (options && options.styles) || [];
  const wrap = (options && options.wrap) || false;
  const userOnSuspenseResolve = (options && options.onSuspenseResolve) || false;

  lazy.rewind();

  let vnode = h(LocationProvider.ctx.Provider, { value: { path } }, h(App));

  let wrappedHtml;
  if (wrap) {
    const wrapped = wrap(vnode);
    vnode = h(wrapped);
    wrappedHtml = wrapped.html;
  }

  const preload = new Set();
  const onSuspenseResolve = (res) => {
    if (res && res.preload) {
      res.preload.forEach((p) => preload.add(p));
    }

    if (userOnSuspenseResolve) {
      userOnSuspenseResolve(res);
    }
  };

  const appHtml = await renderToStringAsync(vnode, { onSuspenseResolve });

  const { metas, links, title, lang, amp, ampScript } = hoofd.toStatic();
  const hoofdStringified = hoofdStringify(title, metas, links, ampScript);

  styles.forEach((s) => preload.add(s));
  scripts.forEach((s) => preload.add(s));
  const preloads = Array.from(preload);

  return minify(
    `
      <!doctype html>
      <html ${lang ? `lang="${lang}"` : ""} ${amp ? `amp` : ""}>
        <head>
          ${hoofdStringified}
          ${renderPreload(preloads)}
        </head>
        <body>${appHtml || ""}
        ${(wrappedHtml && wrappedHtml()) || ""}
        ${scripts.map((script) => `<script src="${script}"></script>`)}
        </body>
      </html>
    `,
    {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true,
    }
  );
}
