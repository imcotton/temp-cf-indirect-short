import { argv } from 'node:process';

import * as esbuild from 'esbuild';

import { esbuild_plugin } from '@indirect/short/hotfix';

const [ main = 'main.js' ] = argv.slice(2);

await esbuild.build({
    entryPoints: [ main ],
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: [ 'node20', 'es2022' ],
    plugins: [ esbuild_plugin ],
    legalComments: 'none',
    outfile: 'bin.js',
});


