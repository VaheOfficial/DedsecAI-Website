module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Correct paths
    "./src/app/**/*.tsx",         // Include app folder if necessary
    "./src/components/**/*.tsx"   // Include components folder
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: 'RGBA(255, 255, 255, 0.04)',
          white: '#FFFFFF',
        },
        primary: '#FFFFFF',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        popup: {
          title: '#6d6d6d',
          body: '#dfdfdf',
          button: '#c4c4c4'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pixel_operator: ['"Pixel Operator"', 'monospace'],
        tempesta_five: ['"PF Tempesta Five Condensed"'],
        HACKED: ['"HACKED"'],
      },
      cursor: {
        pointer: 'url(/assets/icons/pointer24.png) 12 0, pointer',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
  