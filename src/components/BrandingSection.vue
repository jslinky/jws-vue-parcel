<template>
    <section class="c-pat-lib-container container mx-auto py-msv">
      <IconMaster></IconMaster>      
      <header>
       <h1 class="o-hdr">Branding</h1> 
      <p class="text-navy-400 mt-t">A collection core elements that make up the Jack Wills brand.</p>           
      </header>

      <!-- COLOURS -->
      <div :colours="colours" class="c-pat-lib-color-container c-pat-lib__full-width">
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Colour Scheme</h2>    
        <!-- Colour data imported from local data.js -->
        <div v-for="color in colours" 
             :class="[`bg-${color.name}`, { 'text-white': color.invert, 'border-white': color.invert }]" 
             class="c-color-pal p-big rounded text-center"> 
          <div class="border border-solid inline-block px-t rounded text-sm">{{color.val}}</div>        
        </div>                   
      </div>         

      <!-- SVGS -->  
      <!-- <SvgUse> component contains default list of SVG ids in data object which relate to the <IconMaster> component (included at the top) -->
      <!-- Pass id through as prop -->
      <div>
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Logo</h2>                 
        <p class="text-navy-400 mt-t">The Jack Wills logo used in the main header</p>    
        <div class="c-pat-lib-component-container text-primary">
          <SvgUse id="jwLogo" classes="w-full h-full max-w-xs mx-auto" />
        </div>
      </div>

      <div>
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Inverted Logo</h2>                 
        <p class="text-navy-400 mt-t">Inverted variant of the Jack Wills logo</p>    
        <div class="c-pat-lib-component-container bg-primary text-white">
          <SvgUse id="jwLogo" classes="w-full h-full max-w-xs mx-auto" />
        </div>
      </div>  

      <div>
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Pheasant Logo</h2>                 
        <p class="text-navy-400 mt-t">Jack Wills pheasant logo</p>    
        <div class="c-pat-lib-component-container bg-white text-primary">
          <SvgUse id="myAccountNav" classes="w-full h-full max-w-xs mx-auto" />
        </div>
      </div> 

      <div>
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Inverted Pheasant Logo</h2>                 
        <p class="text-navy-400 mt-t">Inverted variant of the Jack Wills pheasant logo</p>    
        <div class="c-pat-lib-component-container bg-primary text-white">
          <SvgUse id="myAccountNav" classes="w-full h-full max-w-xs mx-auto" />            
        </div>
      </div>    

      <div class="c-pat-lib__full-width">
        <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 w-full">Icons</h2>                 
        <p class="text-navy-400 mt-t">Icons text</p>    
        <div class="c-pat-lib-component-container bg-primary text-white">

        <SvgUse>
          <template v-slot:default="{ids}">
            <div class="flex flex-wrap">
              <svg v-for="id in ids" :key="id" class="w-md h-md m-sm">
                <use :href=`#${id}`></use> 
              </svg>
            </div>
          </template>
        </SvgUse>

        </div>
      </div>                        

    </section>
</template>

<script>

import IconMaster from './IconMaster'
import SvgUse from './SvgUse'

  export default {
    name:'BradingSection',
    components: {
      IconMaster,
      SvgUse
    },
    props: {
      colours: {
        type: Array
      }
    }
  }
</script>
