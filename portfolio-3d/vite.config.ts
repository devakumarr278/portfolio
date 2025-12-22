import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import globPlugin from 'vite-plugin-glob';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    globPlugin()
  ],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
});