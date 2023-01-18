import { useCallback, useEffect, useRef, useState } from "react";
import { apiService } from "../services/business/api";

export default function useQuery(url) {
  if (!url) { throw new Error('url cannot be empty'); }

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = useCallback(async () =>{
      setIsLoading(true);
      const response = await apiService.get(url);
      setData(response);
      setIsLoading(false);
  }, [url])

  const isMounted = useRef(false);


  useEffect(() => {
    if(!isMounted.current){
      getData();
    }
    
    isMounted.current = true;
  }, [getData])

  return {
    data, isLoading
  };
}

