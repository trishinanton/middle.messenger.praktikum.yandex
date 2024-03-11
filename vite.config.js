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
                registration: resolve(__dirname, 'src/pages/Registration/index.html')
            }
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context: {
            username: 'Anton'
        }
    })],
})
