import { toast } from '@monassosportive/design/overlays'
import { ReactNode, createContext, useState } from 'react'
import { SignIn, signIn } from '../../services/routes/public/session/signIn'
import { signOut } from '../../services/routes/public/session/signOut'


function deleteCookies() {
    const cookies = document.cookie.split("; ")

    for (let c = 0; c < cookies.length; c++) {
        const d = window.location.hostname.split(".")
        while (d.length > 0) {
            const cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path='
            const p = location.pathname.split('/')
            document.cookie = cookieBase + '/'
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/')
                p.pop()
            }
            d.shift()
        }
    }
}


function getIsSignedIn() {
    const stringCookies = document?.cookie?.split("; ")
    const cookie = stringCookies?.find(x => x.includes("isSignedIn"))
    if (!cookie) return false

    const newIsSignedIn = cookie.split("=").at(1)
    if (!newIsSignedIn) return false

    return true
}


export type SessionContext = {
    isSignedIn: boolean | undefined
    signIn: (props: SignIn) => Promise<void>
    signOut: () => Promise<void>
}

const initalState: SessionContext = {
    isSignedIn: getIsSignedIn(),
    signIn: async () => { },
    signOut: async () => { }
}

export const SessionContext = createContext(initalState)

export const SessionProvider = ({ children }: { children: ReactNode }) => {
    const [isSignedIn, setIsSignedIn] = useState<SessionContext["isSignedIn"]>(getIsSignedIn())

    const handleSignIn = async (props: SignIn) => {
        const response = await signIn(props)

        if (response.status) {
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
        <SessionContext.Provider value={{ isSignedIn, signIn: handleSignIn, signOut: handleSignOut }}>
            {children}
        </SessionContext.Provider>
    )
}
