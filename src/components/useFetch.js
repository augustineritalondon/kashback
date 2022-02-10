import React, {useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data.')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setError(err.message)
                    setIsLoading(false)
                }
            })
    }, [url])
    
    return {data, error};
};

export default useFetch;