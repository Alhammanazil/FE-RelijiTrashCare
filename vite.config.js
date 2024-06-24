import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/', // Sesuaikan jika perlu
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://flask-docker.1i96sz0o1upt.us-south.codeengine.appdomain.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Tambahkan sourcemap untuk debugging
  },
});
