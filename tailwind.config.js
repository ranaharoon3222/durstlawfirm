/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E54A35',
        secondry: '#081b33',
      },
      fontFamily: {
        cal: ['var(--calluna)'],
        lato: ['Lato'],
      },
    },
  },
  plugins: [require('preline/plugin')],
};
