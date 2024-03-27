import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'


export type ProfileContext = {
    data: v.Output<typeof auth.users.get.return> | undefined
    setData: (data: v.Output<typeof auth.users.get.return>) => void
    mutate: () => Promise<void>
    isLoading: boolean
}

const initalState: ProfileContext = {
    data: undefined,
    setData: () => { },
    mutate: async () => { },
    isLoading: false
}

export const profileContext = createContext(initalState)
