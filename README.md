## tsup example 

include pure function and FC React Components and Lib files

```js
src                 
├─ react-component  
│  └─ count.tsx     
├─ add.ts           
├─ index.ts         
└─ ramda.ts         
```

## tsup config

```js
import fs from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
    name: 'test-tsup',
    sourcemap: true,
    // minify: true,
    external: [],
    dts: {
        resolve: true,
        entry: './src/index.ts',
    },
})
```
