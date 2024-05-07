"use client"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RootProvider } from './contexts/rootProvider'
import './fonts.css'
import './index.css'


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    localStorage.theme = 'light'
    const root = createRoot(rootElement)
    root.render(
        <StrictMode>
            <RootProvider />
        </StrictMode>,
    )
}
