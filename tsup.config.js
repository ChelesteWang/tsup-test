import fs from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
    name: 'test-tsup',
    sourcemap: true,
    minify: true,
    dts: {
        resolve: true,
        entry: './src/index.ts',
    },
})