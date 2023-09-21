import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
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
        dts({
            include: ['src/components/'],
        }),
        solidPlugin(),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
        lib: {
            entry: 'src/components/index.ts',
            name: 'Compound SolidJS',
            formats: ['es', 'umd'],
            fileName: (format) => `compound-solidjs.${format}.js`,
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        },
    },
});
