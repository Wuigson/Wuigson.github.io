import { defineConfig } from 'rspress/config';

export default defineConfig({
  // ÎÄµµ¸ùÄ¿Â¼
  root: 'docs',
  base: '/',
  builderConfig: {
    output: {
      assetPrefix: 'https://cdn.com/',
    },
  },
});