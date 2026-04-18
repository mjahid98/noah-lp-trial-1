import { defineConfig }  from 'vite'
import react             from '@vitejs/plugin-react'
import { imagetools }    from 'vite-imagetools'
import { resolve }       from 'path'

// Suppress the libvips "no property named smart_deblock" noise.
// This is a harmless mismatch between vite-imagetools v6's bundled libvips
// and the WebP encoder on this platform — setting VIPS_WARNING=0 silences it.
process.env.VIPS_WARNING = '0'

export default defineConfig({
  plugins: [react(), imagetools()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@ui': resolve(__dirname, 'src/components/ui'),
      '@sections': resolve(__dirname, 'src/components/sections'),
      '@layout': resolve(__dirname, 'src/components/layout'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@content': resolve(__dirname, 'src/content'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
  },
})
