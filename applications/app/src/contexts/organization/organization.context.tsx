import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'


export type OrganizationContext = {
    data: v.Output<typeof auth.organizations.get.return> | undefined
    setData: (data: v.Output<typeof auth.organizations.get.return>) => void
    mutate: () => Promise<void>
    isLoading: boolean
}

const initalState: OrganizationContext = {
    data: undefined,
    setData: () => { },
    mutate: async () => { },
    isLoading: false
}

export const organizationContext = createContext(initalState)
