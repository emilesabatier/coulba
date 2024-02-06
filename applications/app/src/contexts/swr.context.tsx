'use client'

import { ReactNode } from "react"
import { SWRConfig, SWRConfiguration } from 'swr'
import { z } from "zod"


export const SWRFetcher = async (path: string) => {
    const response = await fetch(
        new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${path}`),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }
    )

    if (!response.ok) {
        const error = new Error(await response.json())
        const parsedError = z.object({ idError: z.string(), message: z.string(), description: z.string().optional() }).safeParse(error)
        if (!parsedError.success) {
            // toast({ title: "Erreur avec le serveur.", variant: "error" })
            return {
                status: false,
                message: "Erreur avec le serveur."
            }
        }

        // toast({ title: parsedError.data.message, description: parsedError.data.description, variant: "error" })

        return {
            status: false,
            message: parsedError.data.message,
            description: parsedError.data.description
        }
    }

    return await response.json()
}


const options: SWRConfiguration = {
    suspense: false,
    fetcher: SWRFetcher,
    revalidateIfStale: true,
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    dedupingInterval: 2000,
    focusThrottleInterval: 5000,
    loadingTimeout: 3000,
    errorRetryInterval: 5000,
    errorRetryCount: 1,
    keepPreviousData: true
}




export function SWRProvider({ children }: { children: ReactNode }) {
    return (
        <SWRConfig value={options}>
            {children}
        </SWRConfig>
    )
}
