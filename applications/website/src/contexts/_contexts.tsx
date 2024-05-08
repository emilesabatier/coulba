

import { Toaster } from '@coulba/design/overlays'
import { Fragment, ReactNode } from 'react'


export function Providers({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <Toaster />
            {children}
        </Fragment>
    )
}
