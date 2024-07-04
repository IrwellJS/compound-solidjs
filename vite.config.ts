import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import {libInjectCss} from "vite-plugin-lib-inject-css";
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
// import devtools from 'solid-devtools/vite';

import * as pj from './package.json'
import {glob} from "glob";

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
            exclude: ['**/*.stories.tsx'],
        }),
        solidPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/index.tsx'),
            formats: ['es'],
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
            input: Object.fromEntries(
                glob.sync('lib/**/*.{ts,tsx}', { ignore: 'lib/**/*.stories.tsx'}).map(file => [
                    // The name of the entry point
                    // lib/nested/foo.ts becomes nested/foo
                    relative(
                        'lib',
                        file.slice(0, file.length - extname(file).length)
                    ),
                    // The absolute path to the entry file
                    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
    },
});
