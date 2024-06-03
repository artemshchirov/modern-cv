import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1400px',
      },
    },
    extend: {
      backgroundImage: {
        page: 'linear-gradient(134deg, #EEF0F5 4.98%, #E6E9EF 94.88%, #E6E9EF 94.88%)',
        section: 'linear-gradient(90deg, #ECEEF3 0%, #F1F2F7 100%)',
        dot: 'linear-gradient(0deg, rgba(166, 180, 200, 0.20) 0%, rgba(166, 180, 200, 0.20) 100%), #E9EDF0',
        'avatar-outer':
          'linear-gradient(134deg, #E6E9EF 4.98%, #E6E9EF 4.99%, #EEF0F5 94.88%)',
      },
      boxShadow: {
        'section-outer':
          '-5px -5px 20px 0px rgba(255, 255, 255, 0.53), 13px 14px 12px -6px rgba(166, 180, 200, 0.48)',
        'section-inner':
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.25) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.55) inset',
        'avatar-outer':
          '19px 25px 92px -32px rgba(166, 180, 200, 0.45), -20px -20px 61px 0px rgba(255, 255, 255, 0.50), 13px 14px 12px -6px rgba(166, 180, 200, 0.57)',
        'avatar-inner':
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.52) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.70) inset',
        dot: '-1.6px -1.6px 3px 0px rgba(255, 255, 255, 0.41) inset, 1.6px 1.3px 1.98px 0px rgba(99, 116, 139, 0.20) inset',
        'dot-active':
          '-3px -3px 6px 0px rgba(255, 255, 255, 0.53), 2px 2px 4px 0px #A6B4C8',
        'btn-lang':
          '-3px -3px 6px 0px rgba(255, 255, 255, 0.53), 8px 9px 8px -6px rgba(166, 180, 200, 0.85)',
        tab: '-3px -3px 12px 0px rgba(255, 255, 255, 0.53), 8px 8px 12px -6px rgba(166, 180, 200, 0.85)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
