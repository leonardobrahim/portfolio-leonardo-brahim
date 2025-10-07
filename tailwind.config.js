/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Isso garante que ele leia todos os arquivos dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}