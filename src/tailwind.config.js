/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./*.js", "./components/*.js", "./components/MobileStore/*.js"],
  content: [],
  theme: {
    extend: {
      colors: {
        'black': '#000',
      },
    },
  },
  plugins: [],
  corePlugins: {
  },
}

