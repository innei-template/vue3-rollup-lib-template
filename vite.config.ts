import { resolve } from 'path'
import { presetAttributify, presetWind } from 'unocss'
import unoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    vueJsx({}),
    unoCSS({
      presets: [
        presetWind({
          dark: 'media',
        }),
        presetAttributify(),
      ],
    }),
    tsconfigPaths({
      projects: [
        resolve(__dirname, './example/tsconfig.json'),
        resolve(__dirname, './tsconfig.json'),
      ],
    }),
  ],
  root: resolve(__dirname, './example'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './example/index.html'),
      },
    },
  },
})
