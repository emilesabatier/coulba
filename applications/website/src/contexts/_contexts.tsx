'use client'

import { Toaster } from '@monassosportive/design/overlays'
import { Fragment, ReactNode } from 'react'


export function Providers({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <Toaster />
            {children}
        </Fragment>
    )
}
