import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: 'docs',
  base: '/',
  builderConfig: {
    output: {
      assetPrefix: 'https://cdn.com/',
    },
  },

});
