import { auth } from '@coulba/schemas/routes'
import { createContext } from 'react'
import * as v from 'valibot'


export type CurrentYearContext = {
    data: v.Output<typeof auth.years.get.return> | undefined
    setData: (data: v.Output<typeof auth.years.get.return>) => void
    mutate: () => Promise<void>
    isLoading: boolean
}

const initalState: CurrentYearContext = {
    data: undefined,
    setData: () => { },
    mutate: async () => { },
    isLoading: false
}

export const currentYearContext = createContext(initalState)
