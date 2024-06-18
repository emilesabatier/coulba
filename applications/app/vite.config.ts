import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig(() => {
    return {
        base: "/",
        server: {
            port: 3101
        },
        plugins: [react()],
        build: {
            outDir: './build'
        }
    }
})
