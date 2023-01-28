import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    

    const request:any = useCallback(async (url:string, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {

    setLoading(true);
    
    try {
        const response = await fetch (url, {method, body, headers});
        
        if (!response.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);  
        }
        const data = await response.json();

        setLoading(false);
        return data;
    } 
    catch (e) {
        // setLoading(false);
        // setError(e.message);
        // throw e;
        console.log("Error");
    }
    }, []);

   
    
    return {loading, request};
};
