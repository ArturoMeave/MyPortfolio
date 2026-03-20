import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      isAnalyze &&
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
          filename: 'dist/stats.html',
        }),
    ],
    build: {
      chunkSizeWarningLimit: 400,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
            'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
            'ogl-vendor': ['ogl'],
          },
        },
      },
    },
  };
});