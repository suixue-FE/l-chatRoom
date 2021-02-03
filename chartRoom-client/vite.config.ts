import { UserConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

const config: UserConfig = {
  alias: {
    '/@/': pathResolve('./src'),
  },
  plugins: [vue(), vueJsx()],
  // proxy: {
  //   '/perf': {
  //     target: 'http://localhost:3001/perf',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/perf/, ''),
  //   },
  // },
};

module.exports = config;
