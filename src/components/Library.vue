<template>
  <div class="homepage">
    <!-- BRANDING section -->
    <BrandingSection :colours="colours"></BrandingSection>
    <!-- TYPOGRAPHY section -->
    <Typography></Typography>
    <!-- BUTTON section -->
    <ButtonSection></ButtonSection>
    <!-- MASTHEAD section -->
    <MastheadSection></MastheadSection>
  </div>
</template>

<script>

import IconMaster from './IconMaster'
import SvgUse from './SvgUse'
import ImageComponent from './Image'
import Item from './Item'

import Typography from './TypographySection'
import ButtonSection from './ButtonSection'
import MastheadSection from './MastheadSection'
import BrandingSection from './BrandingSection'


// Import data
import { colors } from '../data/library'


export default {
  name: 'Library',
  components: {
    IconMaster,
    SvgUse,
    Typography,
    ButtonSection,
    ImageComponent,
    Item,
    MastheadSection,
    BrandingSection
  },
  data() {
    return {
      page: {}
    }
  },
  methods: {
    pageData(data, name) {
      if(typeof data != "undefined" && (typeof name === 'string' || name instanceof String)) {
        const payload = this.$extendObj(data)
        this.$set(this.page, name, payload)         
      } else {
        console.log('Set your data properly')
      }
    }    
  },
  computed: {
    colours() {
      return Object.entries(this.page.colors).map(color => color[1])
    }
  },
  mounted() {
    console.log(this.$siteVars)
  },
  beforeMount() {
    // this.pageData(masthead, 'masthead')
    this.pageData(colors, 'colors')
  }
}
</script>

<style lang="less">

@import (reference) "../less/main.less";

p {
  max-width:70ch;
}

.c-pat-lib-container {
  display:grid;
  grid-template-columns: 1fr;
  grid-gap:24px;
}

@media (min-width:theme('screens.lap')) {
  .c-pat-lib-container {
    grid-template-columns: 1fr 1fr;
  }  
  .c-pat-lib-container header,
  .c-pat-lib__full-width {
    grid-column:~"1 / 3";  
  }  
}

.c-pat-lib-container header .o-hdr {
  --hdr-ff: @ff-sans;
  --hdr-fs: 2rem;
  @apply mt-lg;
}

.c-pat-lib-container > div {
  display: flex;
  flex-direction: column;
}

.c-pat-lib-component-container { @apply border border-navy-100 border-solid p-big rounded flex items-start flex-auto; }
.c-pat-lib-component-container + div { @apply mt-lg; }

.c-pat-lib-color-container.c-pat-lib-color-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap:12px;
}
.c-pat-lib-color-container > .o-hdr {
  grid-column-end:-1;
  grid-column-start:1;
}

// Custom card breakpoint
.c-item-card-demo {
  --item-card-breakpoint:648;
    color:theme('colors.primary'); // should be a custom prop
    --item-bg: transparent;  
    --hdr-color: theme('colors.primary');
}

@media (min-width: theme('screens.tab')) {

  .c-item-card-demo {  
    color:#fff; // should be a custom prop
    --item-bg: theme('colors.primary');
    --hdr-color: #fff;
  }

}


.c-mh-demo-fixed-bg {
  --mh-bg: url(../assets/TEST/01-BG.jpg);
  background-attachment: fixed;
  background-position: center top;
  background-size: cover;  
}


.c-masthead-demo-fluid-type {
  .fluid-type(font-size, 35em, 60em, 0.75em, 1em);
  .o-item__content .o-hdr:nth-child(1) {
    --hdr-fs:1em;
    // create relative ultility classes
  } 
  .o-item__content .o-hdr:nth-child(2) {
    --hdr-fs:5.610232974924883em;
    // create relative ultility classes
  }  
}




</style>