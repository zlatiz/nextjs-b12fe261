import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1F1B2E',
        secondary: '#FF6B6B',
        accent: '#00E0A8',
        background: '#0F0F14',
        surface: '#16121A',
        muted: '#BDB6C6',
        border: '#2A2540'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        md: '12px'
      },
      boxShadow: {
        sm: '0 1px 4px rgba(0,0,0,0.6)',
        md: '0 6px 18px rgba(0,0,0,0.65)'
      }
    }
  },
  plugins: []
};

export default config;
