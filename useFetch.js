import { useEffect } from "react"
import { useState } from "react"


const almacenarCache = {}



const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        getFecth()
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null,

        })
    }

    const getFecth = async () => {

        if (almacenarCache[url]){
            console.log('usando cache');
            setState({
                data: almacenarCache[url],
                loading: false,
                hasError: false,
                error: null
            })

            return;
            
        }



        setLoadingState()

        const response = await fetch(url)
        
        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500))

        if(!response.ok){
            //mensaje de error
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                },
            })
            return
        }

        const data = await response.json()
        
        setState({data, loading: false, hasError: false, error: null})

        /* Manejo del cache */
        almacenarCache[url] = data;
        
    }

    return{
        data: state.data,
        loading: state.loading,
        hasError: state.hasError,
    }

}

export default useFetch