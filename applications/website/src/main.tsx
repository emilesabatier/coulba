import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './contexts/_contexts'
import './fonts.css'
import './index.css'
import { Router } from './routes/router.provider'


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    localStorage.theme = 'light'
    const root = createRoot(rootElement)
    root.render(
        <StrictMode>
            <Providers>
                <Router />
            </Providers>
        </StrictMode>,
    )
}
