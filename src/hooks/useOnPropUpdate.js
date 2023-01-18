/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useOnPropUpdate(functionToCall, [props]) {
  const [data, setData] = useState();

  useEffect(() => {
      functionToCall();
  }, [functionToCall, ...props])

  return {
    data, setData
  };
}

