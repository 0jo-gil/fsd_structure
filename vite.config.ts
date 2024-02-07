import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: [
            {find: '@', replacement: resolve(__dirname, 'src')},
            {find: '@store', replacement: resolve(__dirname, 'src/store')},
        ]
    },
    server: {
        hmr: {overlay: false},
        // cors: false,
        proxy: {
            "/api": {
                target: "http://192.168.0.6:8080",
                // changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ""),
                secure: false,
                // ws: true
            }
        }
    }
})
