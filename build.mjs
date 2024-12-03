import * as esbuild from 'esbuild';

import { esbuild_plugin } from '@indirect/short/hotfix';

await esbuild.build({
    entryPoints: [ 'main.js' ],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: [ 'node20', 'es2022' ],
    plugins: [ esbuild_plugin ],
    legalComments: 'none',
    outfile: 'bin.js',
});


