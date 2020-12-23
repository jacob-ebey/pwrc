import { ErrorBoundary, lazy } from "@pwrc/preact";
import { h } from "preact";
import { Router } from "preact-iso/router";
import { useLang, useTitleTemplate } from "hoofd/preact";

import Shell from "./components/shell";

let assetPrefix = typeof SUB_PATH === "undefined" ? false : SUB_PATH;
assetPrefix = assetPrefix.endsWith("/")
  ? assetPrefix.slice(0, -1)
  : assetPrefix;

const Home = lazy(() => import("./pages/home"), { route: true });
const About = lazy(() => import("./pages/about"), { route: true });
const NotFound = lazy(() => import("./pages/_404"), { route: true });

function routePath(path) {
  if (typeof window === "undefined" || !assetPrefix) {
    return path;
  }

  if (path === "/") {
    return assetPrefix;
  }

  return assetPrefix + path;
}

export default function App() {
  useLang("en-us");
  useTitleTemplate("%s | Example");

  return (
    <Shell>
      <ErrorBoundary>
        <Router>
          <Home path={routePath("/")} />
          <About path={routePath("/about")} />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </Shell>
  );
}
