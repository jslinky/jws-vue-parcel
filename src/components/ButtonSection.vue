<template>
  <section class="c-pat-lib-container container mx-auto py-lg">
    <header>
      <h1 class="o-hdr">Buttons</h1> 
    </header>
    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Default</h2>  
      <p class="text-navy-400 mt-t">A default button style</p>    
      <div class="c-pat-lib-component-container">        
        <div>
          <a class="o-btn">Button</a>
        </div>
      </div>
    </div>    

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Inverted Button</h2>  
      <p class="text-navy-400 mt-t">The inverted version of the default button to be used on darker backgrounds.</p>    
      <div class="c-pat-lib-component-container bg-primary">        
        <div>
          <a class="o-btn inverted">Button</a>
        </div>
      </div>
    </div> 

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Basic Button</h2>  
      <p class="text-navy-400 mt-t">The basic button style uses the <code>.o-btn--basic</code> modifyer class</p>    
      <div class="c-pat-lib-component-container">        
        <div>
          <a class="o-btn o-btn--basic">Button</a>
        </div>
      </div>
    </div> 

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Inverted Basic Button</h2>  
      <p class="text-navy-400 mt-t">The inverted version of the basic button to be used on darker backgrounds.</p>    
      <div class="c-pat-lib-component-container bg-primary">        
        <div>
          <a class="o-btn o-btn--basic inverted">Button</a>
        </div>
      </div>
    </div>  

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Primary Button</h2>  
      <p class="text-navy-400 mt-t">The primary button style uses the <code>.o-btn--primary</code> modifyer class</p>    
      <div class="c-pat-lib-component-container">        
        <div>
          <a class="o-btn o-btn--primary">Button</a>
        </div>
      </div>
    </div> 

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Inverted Primary Button</h2>  
      <p class="text-navy-400 mt-t">The inverted version of the primary button.</p>    
      <div class="c-pat-lib-component-container">        
        <div>
          <a class="o-btn o-btn--primary inverted">Button</a>
        </div>
      </div>
    </div> 

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Additional Colors</h2>  
      <p class="text-navy-400 mt-t">Generate additional colours or styles using ultility classes</p>    
      <div class="c-pat-lib-component-container">        
        <div class="o-btns">
          <a class="o-btn text-red self-center w-auto">Button</a>
          <a class="o-btn o-btn--basic text-red self-center">Button</a>
          <a class="o-btn o-btn--primary self-center bg-red border-red hover:border-red hover:bg-transparent hover:text-red">Button</a>
          <div class="ml-sm py-md px-lg bg-primary rounded w-full">
          <a class="o-btn o-btn--primary text-primary bg-white border-white hover:border-white hover:bg-white hover:text-primary">Button</a>
          </div>
        </div>
      </div>
    </div>   

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Icon Button</h2>  
      <p class="text-navy-400 mt-t">The inverted version of the primary button.</p>    
      <div class="c-pat-lib-component-container flex-col">        
        <div class="o-btns o-btns--stacked o-btns--stacked-md mb-base">
          <a class="o-btn o-btn--basic border-none hover:border-none hover:shadow-none normal-case">
            <div style="width:1em; height:1em" class="mr-t">
              <SvgUse id="contact" classes="w-full h-full max-w-xs mx-auto" /></SvgUse>              
            </div>
            Chat now
          </a>
          <a class="o-btn o-btn--primary bg-green border-green shadow-none hover:text-white rounded-lg" style="--btn-padding: 1em 2em;">              
            View bag
            <div style="width:1.5em; height:1.5em" class="ml-t">
              <SvgUse id="bagEmptyNav" classes="w-full h-full max-w-xs mx-auto" /></SvgUse>              
            </div>              
          </a>
        </div>
        <div class="o-btns">
          <a class="o-btn o-btn--basic w-auto min-w-0 rounded-full p-sm">
            <div style="width:1em; height:1em">
              <SvgUse id="chevronLeftLight" classes="w-full h-full max-w-xs mx-auto" /></SvgUse>              
            </div>              
          </a>
          <a class="o-btn o-btn--primary w-auto min-w-0 rounded-full p-sm">              
            <div style="width:1em; height:1em">
              <SvgUse id="chevronRightLight" classes="w-full h-full max-w-xs mx-auto" /></SvgUse>              
            </div>              
          </a>
        </div>          
      </div>
    </div>             

    <div class="c-pat-lib__full-width">
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Button Group</h2>  
      <p class="text-navy-400 mt-t">Holds a collection of buttons to control basic layout</p>    

      <div class="c-pat-lib-component-container">        
        <div class="w-full">
          <div class="o-btns w-full">
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>              
          </div>            
        </div>
      </div>

      <div class="c-pat-lib-component-container">        
        <div>
          <div class="o-btns">
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>              
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>                
          </div>            
        </div>
      </div>        
    </div>      


    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400 bg-blue">Stacked Button Group</h2>  
      <p class="text-navy-400 mt-t">The stacked version of the button group uses the modifyer classes <code>o-btns--stacked</code> and / or <code>o-btns--stacked-md</code></p>    

      <div class="c-pat-lib-component-container">        
        <div class="w-full">
          <div class="o-btns o-btns--stacked o-btns--stacked-md">
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>
            <a class="o-btn o-btn--primary inverted">Button</a>                             
          </div>            
        </div>
      </div>        
    </div>                           

  </section>  

</template>

<script>

import SvgUse from './SvgUse'

  export default {
    name:'ButtonSection',
    components: {
      SvgUse
    }
  }
</script>