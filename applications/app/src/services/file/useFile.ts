import { useEffect, useState } from "react"
import { generateGet } from "../api/auth/services/signedurl/generateGet"


export function useFile(key?: string | null): [string | undefined, boolean] {
    const [url, setUrl] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        if (!key) {
            setIsLoading(false)
            return
        }
        (async () => {
            try {
                setUrl((await generateGet({ body: { storageKey: key } }))?.url)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        })()
    }, [key])

    return [url, isLoading]
}
