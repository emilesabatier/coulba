import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'
import { ReactNode } from "react"


const queryClient = new QueryClient()

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
