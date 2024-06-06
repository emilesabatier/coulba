import { ReactNode, useEffect, useState } from "react"
import { readProfile } from "../../services/api/auth/profile/readProfile"
import { getCookie } from "../../services/getCookie"
import { SessionContext } from "./session.context"


export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [profile, setProfile] = useState<SessionContext["profile"]>(undefined)
    const [isSignedIn, setIsSignedIn] = useState<SessionContext["isSignedIn"]>(getCookie("is_signed_in") === "true")

    async function mutate() {
        setIsLoading(true)

        if (getCookie("is_signed_in") === "true") {
            const response = await readProfile()
            if (!!response) {
                setIsSignedIn(true)
                setProfile(response)
                setIsLoading(false)
                return
            }
        }

        setIsSignedIn(false)
        setProfile(undefined)
        setIsLoading(false)
        return
    }

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            await mutate()
        }, 10)
        return () => clearTimeout(timeoutId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SessionContext.Provider
            value={{
                profile: profile,
                mutate: mutate,
                isLoading: isLoading,
                isSignedIn: isSignedIn
            }}
        >
            {children}
        </SessionContext.Provider>
    )
}
