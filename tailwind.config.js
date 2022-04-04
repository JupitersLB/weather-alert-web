module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: (theme) => ({
        'jlb-modal': 'rgba(10, 10, 10, 0.6)',
      }),
    },
  },
  plugins: [],
}
