import "preact/devtools";
import { h, hydrate } from "preact";
import { LocationProvider } from "preact-iso/router";

import App from "./app";

export default function Client() {
  return (
    <LocationProvider>
      <App />
    </LocationProvider> 
  );
}

hydrate(<Client />, document.body);
