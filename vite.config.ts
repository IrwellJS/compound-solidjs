import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import {libInjectCss} from "vite-plugin-lib-inject-css";
import { resolve } from 'path'
// import devtools from 'solid-devtools/vite';

import * as pj from './package.json'

interface PackageJson {
    peerDependencies: {}
}

const packageJson = pj as never as PackageJson

export default defineConfig({
    plugins: [
        /*
        Uncomment the following line to enable solid-devtools.
        For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
        */
        // devtools(),
        libInjectCss(),
        dts({
            include: ['lib/'],
        }),
        solidPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        copyPublicDir: false,
        target: 'esnext',
        lib: {
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'Compound SolidJS',
            formats: ['es', 'umd'],
            fileName: (format) => `compound-solidjs.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});
