import react from '@vitejs/plugin-react'
import fs from 'fs'
import { defineConfig, loadEnv } from 'vite'


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            react()
        ],
        assetsInclude: ['**/*.md'],
        server: {
            port: Number(env.VITE_PORT),
            https: {
                key: fs.readFileSync('../../.cert/localhost-key.pem'),
                cert: fs.readFileSync('../../.cert/localhost.pem'),
            },
        },
        preview: {
            port: Number(env.VITE_PORT)
        }
    }
})
