import { defineConfig } from 'dumi';
import { nav } from './config';

export default defineConfig({
  title: 'UI',
  // favicon: '/logo.jpeg',
  // logo: '/logo.jpeg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: nav,
});
