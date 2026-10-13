import fs from 'fs';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig, type Plugin} from 'vite';

function serveRootCvPlugin(): Plugin {
  return {
    name: 'serve-root-cv',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0] === '/Kamran-Ali-CV.pdf') {
          const rootCv = path.resolve(__dirname, 'Kamran-Ali-CV.pdf');
          const publicCv = path.resolve(__dirname, 'public/Kamran-Ali-CV.pdf');
          const target = fs.existsSync(publicCv) ? publicCv : fs.existsSync(rootCv) ? rootCv : null;
          if (target) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Kamran-Ali-CV.pdf"');
            return fs.createReadStream(target).pipe(res);
          }
        }
        next();
      });
    },
    closeBundle() {
      const rootCv = path.resolve(__dirname, 'Kamran-Ali-CV.pdf');
      const distCv = path.resolve(__dirname, 'dist/Kamran-Ali-CV.pdf');
      if (fs.existsSync(rootCv) && !fs.existsSync(distCv)) {
        try {
          fs.copyFileSync(rootCv, distCv);
        } catch {
          // ignore
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [serveRootCvPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
