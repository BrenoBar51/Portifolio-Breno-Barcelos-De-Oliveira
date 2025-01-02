/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#22c55e',
      'green-hover': '#15803d',
      'white': '#ffffff',
      'black': '#000000',
      'gray-card': '#374151',
      'gray-card-hover': '#4b5563',
      'blue': '#3b82f6',
      'description': '#9ca3af',
      'section': {
        900:'#111827',
        800:'#1f2937',
      },
    },
    screens: {
      'lg-mobile': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'lg-laptop': '1440px',
      'xl-desktop': '2560px',
    },
    extend: {},
  },
  plugins: [],
}

