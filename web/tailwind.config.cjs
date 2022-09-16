/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('./public/background-galaxy.png')",
        'nlw-linear':
          'linear-gradient(89.86deg, #9572FC 35.08%, #43E7AD 23.94%, #E1D55D 44.57%);',
        'nlw-game':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);'
      }
    }
  },
  plugins: []
}
