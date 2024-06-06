import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'
import { getCookie } from '../../services/getCookie'


export type SessionContext = {
    profile: v.Output<typeof auth.users.get.return> | undefined
    mutate: () => Promise<void>
    isSignedIn: boolean
    isLoading: boolean
}

const initalState: SessionContext = {
    profile: undefined,
    mutate: async () => { },
    isSignedIn: getCookie("is_signed_in") === "true",
    isLoading: false
}

export const SessionContext = createContext(initalState)
