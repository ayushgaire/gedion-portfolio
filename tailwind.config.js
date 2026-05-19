/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Satoshi"', '"Inter"', 'sans-serif'],
      },
      colors: {
        ink: '#0a0f1f',
        panel: 'rgba(255,255,255,0.05)',
        gold: '#22d3ee',
        aqua: '#38bdf8',
        violet: '#6366f1',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-rev': 'spin 22s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
}
