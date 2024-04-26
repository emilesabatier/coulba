import react from '@vitejs/plugin-react'
import { defineConfig, } from 'vite'


// https://vitejs.dev/config/
export default defineConfig(() => {

    return {
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
