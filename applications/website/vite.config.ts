import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [react()],
        server: {
            port: Number(env.VITE_PORT),
            // https: {
            //     key: fs.readFileSync('../../.cert/localhost-key.pem'),
            //     cert: fs.readFileSync('../../.cert/localhost.pem'),
            // },
        },
        preview: {
            port: Number(env.VITE_PORT)
        },
        build: {
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
