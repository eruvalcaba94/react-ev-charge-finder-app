/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#1d1d1f',
        background: '#f5f5f7',
        primary: '#593cfb',
        secondary: '#1a013c',
        accent: '#9747ff',
      },
      fontFamily: {
        display: ['Karla', 'monospace'],
        body: ['Inconsolata', 'monospace'],
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}