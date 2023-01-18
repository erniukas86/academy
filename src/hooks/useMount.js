import { useEffect, useRef } from "react";

export function useOnMount(functionToCall) {
  const isMounted = useRef(false);

  useEffect(() => {
    if(!isMounted.current){
        functionToCall();
    }
    
    isMounted.current = true;
  }, [functionToCall])
}

