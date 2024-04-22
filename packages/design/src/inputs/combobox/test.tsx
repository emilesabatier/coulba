import { useEffect, useState } from "react"
import { CircularLoader } from "../../layouts"

export function Test() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) return <CircularLoader />
    return "ok"
}
