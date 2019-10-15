<template>
  <article class="o-item" :class="itemClass" ref="item">
    <figure class="o-item__figure" :class="figureClass" v-if="hasPropImage || hasSlotImage">
      <slot name="image">
        <a v-if="imgLink !== undefined" :href="imgLink" class="o-item__figure-link">
          <!-- Image goes here -->
          <ImageComponent 
            :pictureClass="pictureClass"
            :imgClass="imgClass"
            :images="images"                        
          >          
          </ImageComponent>
        </a>
        <div v-else class="o-item__figure-link">
          <ImageComponent 
            :pictureClass="pictureClass"
            :imgClass="imgClass"
            :images="images"  
          >          
          </ImageComponent>
        </div>
      </slot>
      <figcaption class="o-item__content" :class="contentClass">
        <slot name="contentWrap">
          <slot name="heading">
            <h1 v-for="header in headings" class="o-hdr o-item__hdr" :class="header.classes">
              {{header.innerContent}}
            </h1> 
          </slot>
          <slot name="content"></slot>        
          <slot name="buttons">
            <ButtonGroup :btnsClasses="btnsClasses" :links="cta" />   
          </slot>
        </slot>
      </figcaption>
    </figure>
    <div class="o-item__figure" v-else>
      <slot name="image"></slot>
      <div class="o-item__content" :class="contentClass">
        <slot name="contentWrap">
          <slot name="heading">
            <h1 v-for="header in headings" class="o-hdr o-item__hdr" :class="header.classes">
              {{header.innerContent}}
            </h1>   
          </slot>
          <slot name="content"></slot>        
          <slot name="buttons">
            <ButtonGroup :btnsClasses="btnsClasses" :links="cta" />   
          </slot>
        </slot>
      </div>
    </div>    

  </article>
</template>

<script>


import ButtonGroup from './ButtonGroup'
import Button from './Button'
import ImageComponent from './Image'

  export default {
    name:'item',
    components: {
      ButtonGroup,
      Button,
      ImageComponent
    },
    data() {
      return {
        hasSlotImage: false,
        hasPropImage: false
      }
    },
    props: {
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
      },
      btnsClasses: {
        type:Array
      },
      itemClass: {
        type:Array
      },
      figureClass: {
        type: Array
      },
      imgLink: {
        type: String              
      },
      imgClass: {
        type: Array
      },
      pictureClass: {
        type:Array
      },
      contentClass: {
        type:Array
      },
      headings: {
        type: Array,
        default: function() {
          return [
            {
              innerContent: 'Main heading',
              classes: ''              
            }
          ]
        }
      },            
      cta: {
        type: Array,
        default: function () {
          return [
            {
              innerContent: 'Button',
              url: '#',
              type: 'default',
              classes:'',
              title: 'Shop Now'           
            }
          ]          
        }
      }     
    },
    computed: {
      links() {
        return this.cta
      }
    },
    mounted() {
      // Check to see whether we have an image
      let imageSlot = this.$refs.item,
          hasSlotImage = false,
          hasPropImage = false

      // Check image
      imageSlot.childNodes.forEach(function(el) {
        if(el.nodeName !== '#text' && el.querySelectorAll('.o-item__img').length > 0) {
          hasSlotImage = true
        }          
      })

      this.hasSlotImage = hasSlotImage

      for(var prop in this.$props) {
          if (this.$props.hasOwnProperty(prop) && prop == 'images') {
              hasPropImage = true
          }        
      }      
      
      this.hasPropImage = hasPropImage

    }
  }
</script>