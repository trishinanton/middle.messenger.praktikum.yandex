import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                auth: resolve(__dirname, 'src/pages/Authorization/index.html'),
                settings: resolve(__dirname, 'src/pages/Settings/index.html'),
                profile: resolve(__dirname, 'src/pages/Profile/index.html'),
                registration: resolve(__dirname, 'src/pages/Registration/index.html'),
                error404: resolve(__dirname, 'src/pages/Error404/index.html'),
                error500: resolve(__dirname, 'src/pages/Error500/index.html'),
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/commonStyles/constants.scss";`,
            },
        },
    }
})
