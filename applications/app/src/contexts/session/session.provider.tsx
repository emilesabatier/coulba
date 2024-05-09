import { toast } from "@coulba/design/overlays"
import { ReactNode, useEffect, useState } from "react"
import { router } from "../../routes/router"
import { readProfile } from "../../services/api/auth/profile/readProfile"
import { SignIn, signIn } from "../../services/api/shared/sessions/signIn"
import { signOut } from "../../services/api/shared/sessions/signOut"
import { deleteCookies } from "../../services/deleteCookies"
import { getIsSignedIn } from "./getIsSignedIn"
import { SessionContext } from "./session.context"


export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [profile, setProfile] = useState<SessionContext["profile"]>(undefined)
    const [isSignedIn, setIsSignedIn] = useState<SessionContext["isSignedIn"]>(getIsSignedIn())

    async function getProfile() {
        setIsLoading(!isLoading)

        const response = await readProfile()
        if (!response) {
            setIsLoading(false)
            return
        }

        console.log(router.parseLocation().pathname)
        // if (!response.isInvitationValidated && router.parseLocation().pathname !== "/activation") {
        //     setIsLoading(false)
        //     router.navigate({ to: "/activation" })
        //     window.location.reload()
        // }
        // if (response.isInvitationValidated && router.parseLocation().pathname === "/activation") {
        //     setIsLoading(false)
        //     router.navigate({ to: "/" })
        //     window.location.reload()
        // }

        setProfile(response)
        setIsLoading(false)
    }

    useEffect(() => {
        if (isSignedIn) getProfile()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSignIn = async (props: SignIn) => {
        const response = await signIn(props)
        getProfile()

        if (response) {
            setIsSignedIn(true)

            toast({ title: "Connexion réussie.", variant: "success" })

            router.navigate({ to: "/" })
            window.location.reload()
        }
    }

    const handleSignOut = async () => {
        await signOut()

        deleteCookies()
        setIsSignedIn(false)

        toast({ title: "Déconnexion réussie.", variant: "success" })
        router.navigate({ to: "/connexion" })
        window.location.reload()
    }

    return (
        <SessionContext.Provider value={{ profile: profile, setProfile: setProfile, mutate: getProfile, isLoading: isLoading, isSignedIn, signIn: handleSignIn, signOut: handleSignOut }}>
            {children}
        </SessionContext.Provider>
    )
}
