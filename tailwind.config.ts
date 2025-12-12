import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C04000', // Terracotta/Burnt Orange
          light: '#E55300',
          dark: '#8B2E00',
        },
        secondary: {
          DEFAULT: '#006D77', // Deep Teal
          light: '#2A9D8F',
          dark: '#004A52',
        },
        accent: {
          DEFAULT: '#E9C46A', // Saffron/Gold
          light: '#F4D35E',
          dark: '#C8A13B',
        },
        sand: {
          DEFAULT: '#FDF5E6', // Old Lace / Sand
          50: '#FFFEFA',
          100: '#FDF5E6',
          200: '#FAEBD7',
          300: '#F5DEB3',
          900: '#3D2B1F',
        }
      },
      fontFamily: {
        // We will stick with default sans (Inter) for now, but configured here for extensibility
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
