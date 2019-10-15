// tailwind.config.js
const { colors, spacing, fontSize } = require('tailwindcss/defaultTheme')
const { siteSettings } = require('./tailwind-custom-settings')

module.exports = {
  theme: {   
    screens: {
      'lgmob': '414px',
      'tab': '768px',
      'lap': '1024px',
      'dt': '1280px',
      'max': { 'tab': '767px' }
    },
    fontSize: {
      'xs': siteSettings.fontSize.xs,
      'sm': siteSettings.fontSize.sm,
      'base': siteSettings.fontSize.base,
      'md': siteSettings.fontSize.md,
      'lg': siteSettings.fontSize.lg,
      'xl': siteSettings.fontSize.xl,
      'big': siteSettings.fontSize.big,
      'hg': siteSettings.fontSize.hg,
      'msv': siteSettings.fontSize.msv
    },    
    spacing: {
      '0': 0,
      't': siteSettings.spacing.t,
      'xs': siteSettings.spacing.xs,
      'sm': siteSettings.spacing.sm,
      'base': siteSettings.spacing.base,
      'md': siteSettings.spacing.md,
      'lg': siteSettings.spacing.lg,
      'xl': siteSettings.spacing.xl,
      'big': siteSettings.spacing.big,
      'hg': siteSettings.spacing.hg,
      'msv': siteSettings.spacing.msv
    },     
    colors: {
      'primary': siteSettings.colors.navy['600'],
      'secondary': siteSettings.colors.pink,
      'black':colors.black,
      'white':colors.white,
      'navy': {
        ...siteSettings.colors.navy
      },
      'red': siteSettings.colors.red,
      'transparent': 'transparent',
      'green': siteSettings.colors.green
    },    
    fontFamily: {
      ...siteSettings.fonts
    },    
    extend: {
      boxShadow: {
        'basic': '0 0 0 1px currentColor inset'
      }
    }
  },
  variants: {},
  plugins: [
    function ({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
        ':root': { '--font-size-root': '16' }
      })
    }         
  ],
  corePlugins: [
    'margin',
    'padding',
    'backgroundColor',
    'container',
    'alignContent',
    'alignItems',
    'alignSelf',
    'backgroundPosition',
    'backgroundSize',
    'borderColor',
    'borderWidth',
    'borderStyle',
    'borderRadius',
    'boxShadow',
    'display',
    'inset',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'fontFamily',
    'fontSize',
    'fontWeight',
    'height',
    'justifyContent',
    'letterSpacing',
    'lineHeight',
    'listStylePosition',
    'listStyleType',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'objectFit',
    'objectPosition',
    'opacity',
    'order',
    'outline',
    'overflow',
    'position',
    'textAlign',
    'textColor',
    'textDecoration',
    'textTransform',
    'visibility',
    'whitespace',
    'width',
    'wordBreak',
    'zIndex',
    'pointerEvents'    
  ]  
}