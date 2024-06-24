import { useState, useEffect } from "preact/hooks";

interface Data {
    id:   number;
    name: string;
}


export function useLanguages () {
    const [languages, setLanguages ] = useState<Data[]>([])
    const [loading, setLoading] = useState<boolean>(true); // Estado para manejar el estado de carga
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    useEffect(
        () => {
            const getLanguages = async () => {
                try {
                    const res = await fetch('http://localhost:3000/languages')
                    const data = await res.json()
                    setLanguages(data) 
                    
                } catch (err) {
                    setError('Failed to fetch languages :(');                    
                }
            }
            try {
                getLanguages()
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        },
        []
    )

    return {
        error,
        languages,
        loading
    }
}