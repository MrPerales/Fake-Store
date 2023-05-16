import React from "react";

function useFetch(url){    
    const [data, setData] = React.useState(null);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(()=>setLoading(false))
    }, [])
    return {data, loading,error};
}
export {useFetch}