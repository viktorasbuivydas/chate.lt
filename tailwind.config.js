/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  theme: {
    extend: {
      colors: {
        'background': '#F5F5FA',
        'card-border': '#E8EDF2',
        'brand': '#2775FF',
        'brand-hover': '#2064dd',
        'grayish': '#7E7E8F'
      },
      spacing: {
        '25': '100px',
        '57.5': '230px',
        '82.5': '330px'
      },
    },
    
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
