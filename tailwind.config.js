/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef5ff',
          100: '#d9eaff',
          200: '#bcd8ff',
          300: '#8dbaff',
          400: '#5892ff',
          500: '#2563eb',   // Primary CimplyTax Blue
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3566',
          950: '#0f1f45',
        },
        teal: {
          50:  '#f0fdfa',
          400: '#2dd4bf',
          500: '#14b8a6',   // CTA accent
          600: '#0d9488',
          700: '#0f766e',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',  // Primary text
          900: '#0f172a',
        },
        amber: {
          50:  '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem',    { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem',  { lineHeight: '1' }],
      },
      boxShadow: {
        card:    '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 4px 16px -2px rgb(0 0 0 / 0.08)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 16px 40px -4px rgb(0 0 0 / 0.12)',
        'brand': '0 4px 24px -4px rgb(37 99 235 / 0.35)',
        'teal':  '0 4px 24px -4px rgb(13 148 136 / 0.35)',
      },
      borderRadius: {
        'sm':   '4px',
        DEFAULT: '6px',
        'md':   '8px',
        'lg':   '10px',
        'xl':   '12px',
        '2xl':  '14px',
        '3xl':  '16px',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'float':      'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
