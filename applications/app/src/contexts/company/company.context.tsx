import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'


export type CompanyContext = {
    data: v.Output<typeof auth.companies.get.return> | undefined
    setData: (data: v.Output<typeof auth.companies.get.return>) => void
    mutate: () => Promise<void>
    isLoading: boolean
}

const initalState: CompanyContext = {
    data: undefined,
    setData: () => { },
    mutate: async () => { },
    isLoading: false
}

export const companyContext = createContext(initalState)
