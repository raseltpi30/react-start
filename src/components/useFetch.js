import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Failed to fecth BlogList");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                })
                .catch(error => {
                    setError(error.message);
                    setIsPending(false);
                })
        }, 500);
    }, [url]);

    return {data,isPending,error}
} 

export default useFetch;