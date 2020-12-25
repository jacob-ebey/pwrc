import { useContext, useRef, useState } from "preact/hooks";
import fetch from "cross-fetch";

import PromiseContext from "./context";

export function useFetch(key, url) {
  const promiseContext = useContext(PromiseContext);
  const initialValue = promiseContext[key];
  const promiseRef = useRef();
  const [res, setRes] = useState(
    initialValue || { resolved: false, value: undefined }
  );

  if (!promiseRef.current && !res.resolved) {
    promiseRef.current = fetch(url)
      .then((r) => r.json())
      .then((value) => {
        const newRes = {
          resolved: true,
          value,
        };
        promiseContext[key] = newRes;
        setRes(newRes);
      });
  }

  if (!res.resolved) {
    throw promiseRef.current;
  }

  const reload = () => {
    promiseRef.current = undefined;
    setRes({
      resolved: false,
      value: undefined,
    });
  };

  return [res.value, reload];
}
