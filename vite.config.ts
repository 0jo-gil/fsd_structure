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
        hmr: {overlay: false}
    }
})
