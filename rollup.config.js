import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import external from 'rollup-plugin-peer-deps-external';
import inject from '@rollup/plugin-inject';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import dts from 'rollup-plugin-dts'

const plugins =  [
    nodeResolve({
        extensions: [
            '.jsx',
            '.js',
            '.json',
            '.css',
        ],
    }),
    eslint({
        exclude: [
            'node_modules/**',
            'dist/**',
            '**/*.css',
            '**/*.svg',
            '**/*.png',
        ],
    }),
    external({
        includeDependencies: true,
    }),
    commonjs(),
    babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
    }),
    inject({
        modules: {
            React: 'react',
        },
    }),
    typescript({
        tsconfig: './tsconfig.json',
    }),
];

const helpers = [
    'navigator/getPrefferedLanguage',
]

export default [{
    input: ['src/index.ts', ...helpers.map(h => `src/${h}.ts`)],
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
        }, {
            dir: 'dist',
            format: 'es',
            exports: 'named',
        },
    ],
    plugins,
    preserveModules: true,
},
{
    input: 'src/index.ts',
    output: [
        {
            file: `dist/index.d.ts`,
            format: 'es',
        }
    ],
    plugins: [dts()],
}];
