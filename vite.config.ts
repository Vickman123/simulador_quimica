import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@vcl/shared': path.resolve(__dirname, 'packages/shared/src/index.ts'),
      '@vcl/chem-engine': path.resolve(__dirname, 'packages/chem-engine/src/index.ts'),
      '@vcl/molecular-renderer': path.resolve(__dirname, 'packages/molecular-renderer/src/index.ts'),
      '@vcl/vxr-adapter': path.resolve(__dirname, 'packages/vxr-adapter/src/index.ts'),
    },
  },
  server: {
    port: 3000,
    host: true, // Permite conectarse desde Meta Quest 3S en la misma red Wi-Fi
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
  },
});
