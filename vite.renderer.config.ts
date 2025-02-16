import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config';
import { resolve } from 'path';

// Import the React plugin and vite-plugin-pages
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [
      react(),
      Pages({
        dirs: 'src/routes',
        extensions: ['tsx', 'ts', 'jsx', 'js'],
        importMode: 'async', // Enables code splitting
        routeStyle: 'next',
      }),
      pluginExposeRenderer(name),
    ],
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      postcss: './postcss.config.ts',
    },
    clearScreen: false,
  } as UserConfig;
});
