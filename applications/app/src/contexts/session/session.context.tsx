import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'
import { SignIn } from '../../services/api/shared/sessions/signIn'
import { getIsSignedIn } from './getIsSignedIn'


export type SessionContext = {
    profile: v.Output<typeof auth.users.get.return> | undefined
    setProfile: (data: v.Output<typeof auth.users.get.return>) => void
    mutate: () => Promise<void>
    isSignedIn: boolean | undefined
    signIn: (props: SignIn) => Promise<void>
    signOut: () => Promise<void>
    isLoading: boolean
}

const initalState: SessionContext = {
    profile: undefined,
    setProfile: () => { },
    mutate: async () => { },
    isSignedIn: getIsSignedIn(),
    signIn: async () => { },
    signOut: async () => { },
    isLoading: false
}

export const SessionContext = createContext(initalState)
