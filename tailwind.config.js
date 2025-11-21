module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-900': '#0B3A2E',
        'forest-700': '#11614D',
        'earth-500': '#C9B69F',
        'warm-400': '#E8D8C2',
        'accent': '#8CBF6E',
        'muted': '#6C6C6C',
        'bg': '#FFF9F4'
      },
      borderRadius: {
        xl: '12px'
      }
    }
  },
  plugins: [],
}