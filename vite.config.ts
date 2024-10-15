import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: '0.0.0.0',
    port: 9873,
  },
  plugins: [react()],
})
