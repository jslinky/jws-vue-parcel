<template>
  <div class="o-btns" :class="btnsClasses">
    <template v-for="btn in links">  
    <Button v-if="btn.type == 'default'" :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else-if="btn.type == 'basic'" basic :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else-if="btn.type == 'basic inverted'" basic inverted :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else-if="btn.type == 'primary'" primary :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else-if="btn.type == 'primary inverted'" primary :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else-if="btn.type == 'link'" link :classes='btn.classes' :url='btn.url' :title="btn.title">{{btn.innerContent}}</Button>
    <Button v-else :url='btn.url' :classes='btn.classes' :title="btn.title">{{btn.innerContent}}</Button>
    </template>
  </div>
</template>

<script>

import Button from './Button'

  export default {
    name:'btns',
    components: {
      Button
    },
    props: {
      btnsClasses: Array,
      links: {
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
    }
  }
</script>