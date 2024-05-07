"use client"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './contexts/_contexts'
import './fonts.css'
import './index.css'


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    localStorage.theme = 'light'
    const root = createRoot(rootElement)
    root.render(
        <StrictMode>
            <Providers />
        </StrictMode>,
    )
}
