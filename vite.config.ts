import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const repoName = 'wedding-app';

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`, 
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
  ],
})
