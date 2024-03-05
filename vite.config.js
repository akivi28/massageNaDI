import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig({
    plugins: [
        react(),
        // imageminPlugin(),
    ],
});
