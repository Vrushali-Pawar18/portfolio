/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070a0d',
          900: '#0c1217',
          850: '#10181f',
          800: '#152028',
          750: '#1a2732',
          700: '#1f303e',
          border: 'rgba(31, 48, 62, 0.8)',
          borderGlossy: 'rgba(20, 184, 166, 0.25)',
        },
        teal: {
          brand: '#0d9488',     // Deep rich jewel teal
          dark: '#0f766e',      // Deeper teal
          darker: '#115e59',    // Midnight teal
          deepest: '#042f2e',   // Deep obsidian teal
          vibrant: '#14b8a6',   // Rich glossy teal accent
          light: '#2dd4bf',     // Soft highlight
          glow: 'rgba(13, 148, 136, 0.35)',
        },
        cyan: {
          ice: '#38bdf8',
          deep: '#0284c7',
        },
        mint: {
          accent: '#10b981',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glossy-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 1px 0 rgba(255, 255, 255, 0.12), inset 0 0 20px 0 rgba(13, 148, 136, 0.06)',
        'glossy-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.85), inset 0 1px 2px 0 rgba(255, 255, 255, 0.22), 0 0 35px -5px rgba(13, 148, 136, 0.4)',
        'glossy-btn': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.3), 0 10px 25px -5px rgba(13, 148, 136, 0.45)',
        'glossy-btn-secondary': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 8px 20px -6px rgba(0, 0, 0, 0.6)',
        'teal-glow': '0 0 30px -5px rgba(13, 148, 136, 0.45)',
        'teal-sm': '0 0 15px -3px rgba(13, 148, 136, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
