import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
         fetch(url, { signal: abortCont.signal },)
             .then(response => {
                 if(!response.ok){
                     throw Error('damn g, sorry');
                 }
                 return response.json()
             })
             .then((data)=> {
                 setData(data)
                 setIsPending(false)
             })
             .catch((err) => {
                 if (err.name === 'AbortError'){
                     console.log('fetch aborted')
                 }else{
                 setIsPending(false)
                 setError(err.message)
                 }
             })            
 }, 2000);

    return () => abortCont.abort()
        }, [url]);


    return {data, isPending, error}
}

export default useFetch;