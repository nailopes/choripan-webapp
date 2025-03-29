module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-red': '#CC1517',
        'accent-orange': '#F49819',
        'earthy-brown': '#C55D36',
        'dark-brown': '#6B2A20',
      },
      fontFamily: {
        'bondrians': ['Bondrians', 'sans-serif'],
        'sitka': ['Sitka Text', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}