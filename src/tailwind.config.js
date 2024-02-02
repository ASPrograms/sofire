/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./*.js", "./components/*.js", "./components/AndroidStore/*.js"],
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

