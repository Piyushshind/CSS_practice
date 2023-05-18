import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const useFetch = (URL) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        fetch(URL, { signal: controller.signal })
            .then(res => res.json())
            .then(d => setData(d))
            .catch(setError)
            .finally(() => setLoading(false))
        return () => {
            controller.abort()
        }
    }, [URL])

    return { loading, data, error }
}

export default useFetch;
