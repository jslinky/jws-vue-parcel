
const ms = require('modularscale-js/modularscale')


let custom = {}
custom.siteSettings = {}

custom.siteSettings.modularscale = {
  base: 16,
  ratio: 1.333,
  scale: [],
  min: -3,
  max: 7,
  generate: function () {
    for (let i = this.min; i < this.max; i++) {
      this.scale.push(ms(i, { base: this.base, ratio: this.ratio }) / this.base)
    }
  }
}
/// Generate array of modular scale values
custom.siteSettings.modularscale.generate()
custom.siteSettings.colors = {
  navy: {
    alt: '#1F2A44',
    100: '#EFF0F2',
    200: '#D2D4DA',
    300: '#BBBFC6',
    400: '#8F94A1',
    500: '#353F56',
    600: '#101A31'
  },
  pink: '#F09EB6',
  red: '#C00D1E',
  green: '#5fa54f',
  offWhite: '#f1f1f1',
  offBlack: '#1A1A1A'
}
custom.siteSettings.fonts = {
  'sans': "'GillSansMTPro-Medium','Gill Sans MT',Lato,Arial,sans-serif",
  'serif': '"BaskerVille","Baskerville Old Face","Times New Roman","Hoefler Text",Garamond,serif'
}
custom.siteSettings.fontSize = {
  'xs': custom.siteSettings.modularscale.scale[1] + 'rem',
  'sm': custom.siteSettings.modularscale.scale[2] + 'rem',
  'base': custom.siteSettings.modularscale.scale[3] + 'rem',
  'md': custom.siteSettings.modularscale.scale[4] + 'rem',
  'lg': custom.siteSettings.modularscale.scale[5] + 'rem',
  'xl': custom.siteSettings.modularscale.scale[6] + 'rem',
  'big': custom.siteSettings.modularscale.scale[7] + 'rem',
  'hg': custom.siteSettings.modularscale.scale[8] + 'rem',
  'msv': custom.siteSettings.modularscale.scale[9] + 'rem'
}
custom.siteSettings.spacing = {
  't': custom.siteSettings.modularscale.scale[0] + 'rem',
  'xs': custom.siteSettings.modularscale.scale[1] + 'rem',
  'sm': custom.siteSettings.modularscale.scale[2] + 'rem',
  'base': custom.siteSettings.modularscale.scale[3] + 'rem',
  'md': custom.siteSettings.modularscale.scale[4] + 'rem',
  'lg': custom.siteSettings.modularscale.scale[5] + 'rem',
  'xl': custom.siteSettings.modularscale.scale[6] + 'rem',
  'big': custom.siteSettings.modularscale.scale[7] + 'rem',
  'hg': custom.siteSettings.modularscale.scale[8] + 'rem',
  'msv': custom.siteSettings.modularscale.scale[9] + 'rem'
}

module.exports = custom



