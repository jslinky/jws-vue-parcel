<template>
    <picture v-if="images.length > 1" class="o-item__picture" :class="pictureClass">
      <source v-for="img in otherImages" :media="screenSize(screens, img.type)"
        :srcset="img.url">
      <img :src="defaultImage" class="o-item__img w-full" :class="imgClass" :alt="altTag">
    </picture>
    <div v-else class="o-item__picture" :class="pictureClass">
      <img :src="defaultImage" class="o-item__img w-full" :class="imgClass" :alt="altTag">
    </div>    
</template>

<script>

  export default {
    name:'ImageComponent',
    props: {
      imgClass: {
        type: Array
      },
      pictureClass: {
        type: Array
      }, 
      altTag: {
        type: String
      },          
      images: {
        type: Array,
        default: function() {
          return [
            {
              url: 'https://www.jackwills.com/images/marketing/justin-images/demo/item-img-default.png',
              type: 'default' 
            },
            {
              url: 'https://www.jackwills.com/images/marketing/justin-images/demo/item-img-largeMobile.png',
              type: 'lgmob' 
            },
            {
              url: 'https://www.jackwills.com/images/marketing/justin-images/demo/item-img-tablet.png',
              type: 'tab' 
            },
            {
              url: 'https://www.jackwills.com/images/marketing/justin-images/demo/item-img-desktop.png',
              type: 'dt' 
            }                                    
          ]
        }
      }
    },
    methods: {
      screenSize(obj, key) {
        // do some validation here - check for key
        return '(min-width:' + obj[key] + ')'
      }
    },
    computed: {
      defaultImage() {
        return this.images[0].url
      },
      otherImages() {
        if(this.images.length > 1) {
          let imgs = this.$stringObj(this.images) 
          // remove the first image (which should be the default image)
          imgs.splice(0, 1)
          // based on fact that asencding breakpoint types lengths decrease i.e: lgmob (5), tab (3), dt (2)
          imgs.sort(function(a, b) {
            return a.type.length - b.type.length 
          })
          return imgs
        }
      },
      screens() {
        return this.$siteVars.theme.screens
      }
    }
  }
</script>