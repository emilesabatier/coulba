import { toast } from "@coulba/design/overlays"
import { ReactNode, useEffect, useState } from "react"
import { readProfile } from "../../services/api/auth/profile/readProfile"
import { SignIn, signIn } from "../../services/api/shared/sessions/signIn"
import { signOut } from "../../services/api/shared/sessions/signOut"
import { deleteCookies } from "../../services/deleteCookies"
import { getIsSignedIn } from "./getIsSignedIn"
import { SessionContext } from "./session.context"


export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<SessionContext["user"]>(undefined)
    const [isSignedIn, setIsSignedIn] = useState<SessionContext["isSignedIn"]>(getIsSignedIn())

    async function getProfile() {
        setIsLoading(!isLoading)

        const response = await readProfile()
        if (!response) {
            setIsLoading(false)
            return
        }

        setUser(response)
        setIsLoading(false)
    }

    useEffect(() => {
        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSignIn = async (props: SignIn) => {
        const response = await signIn(props)

        if (response) {
            setIsSignedIn(true)

            toast({ title: "Connexion réussie.", variant: "success" })
            window.location.reload()
        }
    }

    const handleSignOut = async () => {
        await signOut()

        deleteCookies()
        setIsSignedIn(false)

        toast({ title: "Déconnexion réussie.", variant: "success" })
        window.location.reload()
    }

    return (
        <SessionContext.Provider value={{ user: user, setUser: setUser, mutate: getProfile, isLoading: isLoading, isSignedIn, signIn: handleSignIn, signOut: handleSignOut }}>
            {children}
        </SessionContext.Provider>
    )
}
