import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig(() => {
    return {
        server: {
            port: 3102
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
