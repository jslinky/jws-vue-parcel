<template>
  <button v-if="button && !link"
    class="o-btn" 
    :class="btnStyle">
    <slot>Button</slot>
  </button> 
  <a v-else-if="!button && !link"
    :href="url"
    class="o-btn" 
    :class="btnStyle">
    <slot>Button</slot>
  </a>    
  <a v-else
    :href="url"
    :class="btnStyle">  
    <slot>Button</slot>
  </a>        
</template>

<script>

export default {
  name: 'Button',
  props: {
    url: {
      type: String,
      default: '#'
    },
    button: {
      type: Boolean,
      default: false
    },
    basic: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false      
    }, 
    inverted: {
      type: Boolean,
      default: false      
    },
    small: {
      type: Boolean,
      default: false      
    },
    large: {
      type: Boolean,
      default: false      
    },
    link: {
      type: Boolean,
      default: false      
    },    
    classes: {
      type: String
    }         
  },
  computed: {
    btnStyle() {
      let type = {
        'o-btn--basic': this.basic, 
        'o-btn--primary': this.primary, 
        'inverted': this.inverted, 
        'o-btn--sm': this.small,
        'o-btn--lg': this.large,
        'o-link': this.link
      }
      if(this.classes !== undefined) type[this.classes] = true
      return type    
    }
  }
}
</script>

