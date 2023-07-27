import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (params) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';
    const fetchData = async(params) => {
        try{
            setloading(true);
            const result = await axios(params);
            setResponse(result.data);
        } catch(error){
            setError(error);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        fetchData(params);
    }, []);

    return {response, error, loading};
}


export default useAxios;