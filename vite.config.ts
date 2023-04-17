import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [react(), eslint({ fix: false, include: ['src/**/*.tsx'] })],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@core': path.resolve(__dirname, './src/core'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views')
    }
  }
});
