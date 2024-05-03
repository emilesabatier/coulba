import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { defineConfig, } from 'vite'


// https://vitejs.dev/config/
export default defineConfig(() => {

    return {
        server: {
            port: 3102,
            https: {
                key: readFileSync('../../.cert/localhost-key.pem'),
                cert: readFileSync('../../.cert/localhost.pem'),
            }
        },
        plugins: [react()],
        build: {
            outDir: './build',
            rollupOptions: {
                output: {
                    manualChunks(id: string) {
                        if (id.includes('react-dom')) {
                            return 'react-dom'
                        }
                    }
                }
            }
        }
    }
})
