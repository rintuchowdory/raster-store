/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        'ink-soft': '#151517',
        canvas: '#EDE9DE',
        'canvas-line': '#D9D3C3',
        charcoal: '#1C1C1E',
        cyan: '#00B7C3',
        magenta: '#E8447A',
        yellow: '#F5C400',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Archivo"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        halftone:
          'radial-gradient(currentColor 1px, transparent 1px)',
      },
      backgroundSize: {
        halftone: '8px 8px',
      },
    },
  },
  plugins: [],
}
