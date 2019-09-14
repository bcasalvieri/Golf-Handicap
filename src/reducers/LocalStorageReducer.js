import { useReducer, useEffect } from "react";

function LocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(
    key => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );
  return [state, dispatch];
}

export default LocalStorageReducer;
