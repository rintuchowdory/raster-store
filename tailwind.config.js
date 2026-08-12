/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141B2E',
        'ink-soft': '#1C2540',
        canvas: '#EFE7D3',
        'canvas-line': '#DCCFAE',
        charcoal: '#241C15',
        cyan: '#00B7C3',
        magenta: '#E8447A',
        yellow: '#F5C400',
        navy: '#141B2E',
        maroon: '#7A2331',
        gold: '#C9A227',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
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
