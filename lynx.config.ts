import {defineConfig} from '@lynx-dev/rspeedy';
import {pluginReactLynx} from '@lynx-dev/react-rsbuild-plugin';
import path from 'node:path'
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  source: {
    entry: {
      'HelloWorld': path.join(__dirname, 'src', 'HelloWorld', 'index.tsx'),
    }
  },
  plugins:[
    pluginReactLynx(),
  ]
})