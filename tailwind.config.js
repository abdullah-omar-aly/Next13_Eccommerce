/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#1F2A4A",
        "semi-transparent": "rgba(0,0,0,0.5)",
        "dark-gray": '#1C1D1D',
        "normal-gray": '#343535',
        "light-gray": "#F7F7F7",
        "main-yellow": "#FFA500",
        "primary-fg": "#FCFCFC",
        "lightblue": "rgb(227, 234, 252)",
        secondary: {
          50: "#F7F7F7",
          100: '#E5E5E5',
          200: '#191919',
          300: '#0F0F0F',
          400: '#343535',
          500: '#1C1D1D',

        }
      },
    },
  },

  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ]
})

