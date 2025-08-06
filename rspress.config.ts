import { defineConfig } from 'rspress/config';

export default defineConfig({
  // �ĵ���Ŀ¼
  root: 'docs',
  base: '/',
  builderConfig: {
    output: {
      assetPrefix: 'https://cdn.com/',
    },
  },
});