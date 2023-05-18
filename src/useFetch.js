import React from "react";

function useFetch(url){    
    // API
    const [data, setData] = React.useState(null);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);
    // Modal
    const [openModal,setOpenModal]=React.useState(false);
 

    React.useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(()=>setLoading(false))
    }, [])
    

    return {data, loading,error,openModal,setOpenModal};
}
export {useFetch}