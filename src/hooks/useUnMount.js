import { useEffect, useState } from "react";

export function useOnUnMount(functionToCall) {
  useEffect(() => {
    return functionToCall();
  }, [functionToCall]);
}

