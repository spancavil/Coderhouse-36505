import { useEffect, useState } from "react";

//Type of API response
type ApiResponse = {
    status: Number | null;
    statusText: String | null;
    data: any;
    error: any;
    loading: Boolean;
};

//Custom hook para hacer fetch a una URL
const useFetch = (url: string): ApiResponse => {

    const [status, setStatus] = useState<number | null>(null);
    const [statusText, setStatusText] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any> (null);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {

        ( async ()=> {
            try {
                const respuesta = await fetch(url);
                const json = await respuesta.json();
                setStatus(respuesta.status);
                setStatusText(respuesta.statusText);
                setData(json);
            } catch (error: any) {
                setError(error)
            }
            setLoading(false);
        })()
    }, [url])
    return { status, statusText, data, error, loading }
}

export default useFetch