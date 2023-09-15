import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-twin', 'babel-plugin-macros', 'babel-plugin-styled-components'],
            },
        }),
        svgr(),
    ],
    esbuild: {
        // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
