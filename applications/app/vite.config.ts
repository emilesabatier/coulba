import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { defineConfig } from 'vite'


export default defineConfig(() => {
    return {
        server: {
            port: 3101,
            https: {
                key: readFileSync('../../.cert/localhost-key.pem'),
                cert: readFileSync('../../.cert/localhost.pem'),
            }
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
