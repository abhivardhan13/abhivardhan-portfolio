/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173B35',
          950: '#0C1F1C',
          900: '#173B35',
          800: '#1F4B44',
          700: '#2A635A',
          600: '#387F74',
          100: '#E4ECE9',
          50: '#F1F5F4'
        },
        stone: {
          DEFAULT: '#E9E2D6',
          50: '#FAF8F5',
          100: '#F2EDE4',
          200: '#E9E2D6',
          300: '#DDD3C3',
          400: '#C7BBA7',
          500: '#B0A28C'
        },
        terracotta: {
          DEFAULT: '#A65D48',
          900: '#5C3125',
          800: '#754032',
          700: '#8C4D3D',
          600: '#9B5542',
          500: '#A65D48',
          400: '#BC735F',
          300: '#D29280',
          100: '#F8EDE9',
          50: '#FCF6F4'
        },
        charcoal: {
          DEFAULT: '#292725',
          950: '#151413',
          900: '#1E1D1B',
          800: '#292725',
          700: '#3D3A37',
          600: '#55514D',
          500: '#706B66',
          400: '#948E87',
          300: '#BDB7AF',
          200: '#DDD8D1',
          100: '#EFECE7'
        },
        cream: {
          DEFAULT: '#F6F3EC',
          50: '#FCFAF7',
          100: '#F6F3EC',
          200: '#ECE6DA',
          300: '#DFD7C7'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'editorial': '0.18em',
        'magazine': '0.25em',
        'wide-editorial': '0.12em',
      },
      lineHeight: {
        'relaxed-editorial': '1.75',
      }
    },
  },
  plugins: [],
}
