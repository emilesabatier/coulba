import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig(() => {
    return {
        server: {
            port: 3101
        },
        build: {
            outDir: './build'
        },
        plugins: [
            react()
        ],
        assetsInclude: ['**/*.md']
    }
})
