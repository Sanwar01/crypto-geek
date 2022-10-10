const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  important: true,
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
    },
  },
  plugins: [],
};
