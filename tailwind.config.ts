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
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'page-dark': 'linear-gradient(159deg, #363E46 -25.92%, #2C343C 82.89%)',
        page: 'linear-gradient(134deg, #EEF0F5 4.98%, #E6E9EF 94.88%, #E6E9EF 94.88%)',
        section: 'linear-gradient(90deg, #ECEEF3 0%, #F1F2F7 100%)',
        'section-dark':
          'linear-gradient(134deg, #3F4850 4.98%, #363E46 94.88%)',
        dot: 'linear-gradient(rgba(178, 189, 204, 0.50), rgba(178, 189, 204, 0.50));',
        'dot-active':
          'linear-gradient(90deg, #ECEEF3 0%, #F1F2F7 100%), linear-gradient(90deg, #ECEEF3 0%, #F1F2F7 100%)',
        'avatar-outer':
          'linear-gradient(134deg, #E6E9EF 4.98%, #E6E9EF 4.99%, #EEF0F5 94.88%)',
        'avatar-outer-dark':
          'linear-gradient(134deg, #3E464F 4.99%, #424A53 94.88%)',
        'tab-active-dark':
          'linear-gradient(249deg, #363E46 -12.81%, #2C343C 305.95%)',
        'btn-inner': 'linear-gradient(134deg, #5B656F 4.98%, #3F4852 94.88%)',
        'btn-outer': 'linear-gradient(134deg, #80868B 4.98%, #5B6773 94.88%)',
        'years-text-gradient':
          'linear-gradient(86deg, #29303E 25.21%, rgba(41, 48, 62, 0.00) 179.61%)',
        skill: 'linear-gradient(136deg, #FFF 22.24%, #BAC3CF 85.59%)',
        'status-signal':
          'linear-gradient(136deg, #09DD84 16.11%, #B9FFE2 96.51%)',
        menu: 'linear-gradient(134deg, rgba(238, 240, 245, 0.80) 4.98%, rgba(230, 233, 239, 0.80) 94.88%, rgba(230, 233, 239, 0.80) 94.88%)',
        'menu-dark':
          'linear-gradient(159deg, rgba(54, 62, 70, 0.80) -25.92%, rgba(44, 52, 60, 0.80) 82.89%)',
        'menu-active-dark':
          'linear-gradient(134deg, rgba(63, 72, 80, 0.85) 4.98%, rgba(54, 62, 70, 0.85) 94.88%)',
      },
      boxShadow: {
        divider:
          '7px 4px 10px 2px rgba(0, 0, 0, 0.25), -5px -5px 20px 0px rgba(72, 83, 92, 0.35)',
        'divider-dark':
          '7px 4px 9px 0px rgba(0, 0, 0, 0.25), -5px -5px 20px 0px rgba(72, 83, 92, 0.35)',
        'section-outer':
          '-5px -5px 20px 0px rgba(255, 255, 255, 0.53), 13px 14px 12px -6px rgba(166, 180, 200, 0.48)',
        'section-inner':
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.25) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.55) inset',
        'avatar-outer':
          '19px 25px 92px -32px rgba(166, 180, 200, 0.45), -20px -20px 61px 0px rgba(255, 255, 255, 0.50), 13px 14px 12px -6px rgba(166, 180, 200, 0.57)',
        'avatar-outer-dark':
          '19px 25px 92px -32px rgba(35, 40, 45, 0.35), -20px -20px 61px 0px rgba(72, 83, 92, 0.25), 13px 14px 12px -6px rgba(35, 40, 45, 0.50)',
        'section-outer-dark':
          '-5px -5px 20px 0px rgba(72, 83, 92, 0.35), 13px 14px 12px -6px rgba(35, 40, 45, 0.70)',
        'avatar-inner':
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.52) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.70) inset',
        dot: '-1.6px -1.6px 3px 0px rgba(255, 255, 255, 0.41) inset, 1.6px 1.3px 1.98px 0px rgba(99, 116, 139, 0.20) inset',
        'dot-active':
          '-3px -3px 6px 0px rgba(255, 255, 255, 0.53), 2px 2px 4px 0px #A6B4C8',
        'btn-inner':
          '-2px -2px 3px 0px rgba(88, 98, 107, 0.90), 2px 2px 6px 0px #23292E',
        'btn-outer':
          '-2px -2px 6px 0px rgba(255, 255, 255, 0.70), 3px 3px 6px 0px #A6B4C8',
        'btn-lang':
          '-3px -3px 6px 0px rgba(255, 255, 255, 0.53), 8px 9px 8px -6px rgba(166, 180, 200, 0.85)',
        'btn-lang-dark':
          '-3px -3px 6px 0px rgba(72, 83, 92, 0.35), 8px 9px 8px -6px rgba(35, 40, 45, 0.80)',
        tab: '-3px -3px 12px 0px rgba(255, 255, 255, 0.53), 8px 8px 12px -6px rgba(166, 180, 200, 0.85)',
        'tab-dark':
          '-3px -3px 12px 0px rgba(72, 83, 92, 0.35), 8px 8px 12px -6px rgba(35, 40, 45, 0.80)',
        'tab-active-dark':
          '-3px -3px 12px 0px rgba(72, 83, 92, 0.35), 8px 8px 12px -6px rgba(35, 40, 45, 0.70)',
        'years-inner':
          '-4.183px -4.183px 16.734px 0px rgba(255, 255, 255, 0.53), 6.693px 7.53px 6.693px -5.02px rgba(166, 180, 200, 0.85)',
        'years-outer':
          '10.877px 10.04px 8.367px -5.02px rgba(166, 180, 200, 0.57)',
        'contact-inner':
          '-1.706px -1.706px 2.559px 0px rgba(88, 98, 107, 0.90), 1.706px 1.706px 5.118px 0px #23292E',
        'contact-outer':
          '-1.706px -1.706px 5.118px 0px rgba(255, 255, 255, 0.70), 2.559px 2.559px 5.118px 0px #A6B4C8',
        skill:
          '-3px -3px 6px 0px #FFF, 8px 9px 8px -6px rgba(166, 180, 200, 0.70)',
        '2048-cell':
          '-5px -5px 20px 0px rgba(255, 255, 255, 0.53), 12px 13px 12px -6px rgba(166, 180, 200, 0.50)',
        status:
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.40) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.40) inset',
        'status-dark':
          '-12px -12px 30px 0px rgba(72, 83, 92, 0.24) inset, 7px 7px 8px 0px rgba(35, 40, 45, 0.25) inset, 10px 11px 30px -1px rgba(35, 40, 45, 0.50) inset',
        'status-signal': '3px 3px 6px 0px #9199A5, -3px -2px 7px -2px #4BE9A7',
        'theme-switch':
          '-12px -12px 30px 0px rgba(255, 255, 255, 0.20) inset, 7px 7px 8px 0px rgba(166, 180, 200, 0.30) inset, 10px 11px 30px -1px rgba(166, 180, 200, 0.30) inset',
        'theme-switch-inactive':
          '-3.375px -3.375px 6.75px 0px rgba(255, 255, 255, 0.52), 3.375px 3.375px 6.75px 0px #9199A5',
        'theme-switch-active':
          '-3.187px -3.187px 6.375px 0px rgba(255, 255, 255, 0.52), 3.188px 3.188px 6.375px 0px #9199A5',
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
