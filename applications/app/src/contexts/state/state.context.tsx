import {
    QueryClientProvider
} from '@tanstack/react-query'
import { ReactNode } from "react"
import { queryClient } from './queryClient'



type StateProvider = {
    children: ReactNode
}
export function StateProvider(props: StateProvider) {
    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}
