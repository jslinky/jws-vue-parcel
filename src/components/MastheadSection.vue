<template>
  <section class="c-pat-lib-container container mx-auto py-lg">
    <header>
      <h1 class="o-hdr">Components</h1> 
    </header>


    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Item</h2>  
      <p class="text-navy-400 mt-t">A item typically includes a image and associated content.</p>    
      <div class="c-pat-lib-component-container">        
        <Item
          :headings="[
              {
                innerContent: 'Discover new designs',
                classes: 'o-hdr--xl text-center leading-tight'              
              }
            ]"
          :cta="[
              {
                innerContent: 'Shop Now',
                url: 'http://www.jackwills.com',
                type: 'default',
                classes:'',
                title: 'Shop Now'           
              }
            ]"
            :imgLink="'http://www.jackwills.com'"
        >
          <template v-slot:content>
            <p class="mb-0 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </template>

        </Item>
      </div>
    </div>   

    <div>
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Overlayed Item</h2>  
      <p class="text-navy-400 mt-t">Item content can be overlayed the image by adding the <code>o-item__content--overlay</code> modifyer class.</p>    
      <div class="c-pat-lib-component-container">        
        <Item
          :headings="[
              {
                innerContent: 'Discover new designs',
                classes: 'o-hdr--xl text-inverted text-center leading-tight'              
              }
            ]"
          :cta="[
              {
                innerContent: 'Shop Now',
                url: 'http://www.jackwills.com',
                type: 'default',
                classes:'inverted',
                title: 'Shop Now'           
              }
            ]"
            :imgLink="'http://www.jackwills.com'"
            :contentClass="['o-item__content--overlay']"
        >
          <template v-slot:content>
            <p class="mb-0 text-inverted text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </template>

        </Item>  
      </div>
    </div>     


    <div class="c-pat-lib__full-width">
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Card Item</h2>  
      <p class="text-navy-400 mt-t">The card item variant will align to a single row while the browser viewport width is greater or equal to the <span class="font-bold">module width*</span></p>                  

      <div class="c-pat-lib-component-container">

          <Item
            :headings="[
                {
                  innerContent: 'Discover new designs',
                  classes: 'o-hdr--xl tab:text-big text-center leading-tight'              
                }
              ]"
            :cta="[
                {
                  innerContent: 'Shop Now',
                  url: 'http://www.jackwills.com',
                  type: 'default',
                  classes:'o-btn o-btn--basic tab:text-white',
                  title: 'Shop Now'           
                }
              ]"
              :imgLink="'http://www.jackwills.com'"
              :itemClass="['c-item-card-demo', 'o-item--card', 'tab:w-full', 'mx-auto']"
          >
          </Item>         

      </div>

    <p class="text-navy-400 my-lg">* The module width is defined as the value of the <code>--item-card-breakpoint</code> custom property + any horizontal margins or parent element padding.</p>

    </div>

    <div class="c-pat-lib__full-width"> 
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Masthead</h2>  
      <p class="text-navy-400 mt-t">A masthead is a container for promonent content, usually situated at the top of the page. It includes some includes useful modifyer variant classes.</p> 
      <div class="c-pat-lib-component-container full-srn">      

        <div class="c-masthead-demo-fluid-type o-mh flex-col-reverse tab:flex-col full-srn lap:left-0 lap:right-0 lap:m-0 lap:w-full">                        

          <Item
            :images="[
              {
                url: '/masthead-mobile.0f9c068c.jpg',
                type: 'default' 
              },
              {
                url: '/masthead-tab.62659b60.jpg',
                type: 'tab' 
              },
              {
                url: '/masthead-desktop.e8f29f04.jpg',
                type: 'dt' 
              }               
            ]"
            :headings="[
                {
                  innerContent: 'Sub heading',
                  classes: 'o-hdr--sm mt-2 tab:mt-0 text-white text-center mb-3 text-caps uppercase font-sans'              
                },
                {
                  innerContent: 'Main heading',
                  classes: 'o-hdr--msv text-white text-center leading-none font-serif mt-0 mb-t'              
                }                  
              ]"
            :cta="[
                {
                  innerContent: 'Shop Womens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary text-white',
                  title: 'Shop Womens'           
                },
                {
                  innerContent: 'Shop Mens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary text-white',
                  title: 'Shop Mens'           
                }                  
              ]"
              :imgLink="'http://www.jackwills.com'"
              :contentClass="['absolute']"
              :btnsClasses="['w-full', 'max-w-md']"
          >
          </Item> 


        </div>  
      </div>

      <h3 class="o-hdr o-hdr--md font-sans text-navy-400 mt-md">Dynamic Resizing</h3>  
      <p class="text-navy-400 mt-t">In the example above the values of the headings have been set in <em>em</em> and using the .fluid-type mixin the masthead has been set a minimum and maximum font-size. As a result, the content font size will adjust it's size based on the viewport width.</p>     

    </div>       

    <div class="c-pat-lib__full-width"> 
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Aspect Ratio Masthead</h2>  
      <p class="text-navy-400 mt-t">Defining a aspect ratio size for the masthead is done by adding a inline style which includes a custom property called <code>--aspect-ratio</code>. It's value is defined as w/h. In the following example the value is 16/9.</p>   
      <div class="c-pat-lib-component-container full-srn">      
        <div class="o-mh flex-col-reverse tab:flex-row full-srn lap:left-0 lap:right-0 lap:m-0 lap:w-full no-aspect tab:aspect" style="--aspect-ratio: 16/9;">
                      

          <Item
            :images="[
              {
                url: '/masthead-tab.62659b60.jpg',
                type: 'default' 
              }              
            ]"
            :headings="[
                {
                  innerContent: 'Sub heading',
                  classes: 'o-hdr--base mt-2 tab:mt-0 tab:text-white text-center mb-3 text-caps uppercase font-sans'              
                },
                {
                  innerContent: 'Main heading',
                  classes: 'o-hdr--big lgmob:text-hg tab:text-msv tab:text-white text-center leading-none font-serif mt-0 mb-t'              
                }                  
              ]"
            :cta="[
                {
                  innerContent: 'Shop Womens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary tab:text-white',
                  title: 'Shop Womens'           
                },
                {
                  innerContent: 'Shop Mens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary tab:text-white',
                  title: 'Shop Mens'           
                }                  
              ]"
              :imgLink="'http://www.jackwills.com'"
              :contentClass="['tab:absolute', 'mt-md', 'tab:mt-0']"
              :btnsClasses="['w-full', 'max-w-md']"
          >
            <template v-slot:content>
              <p class="text-primary tab:text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </template>            
          </Item> 

        </div>  
      </div>
  
    </div>    

    <div class="c-pat-lib__full-width"> 
      <p class="text-navy-400 mt-t">The example below removes</p>   
      <div class="c-pat-lib-component-container full-srn">      
        <div class="c-mh-demo-fixed-bg o-mh flex-col-reverse tab:flex-row full-srn lap:left-0 lap:right-0 lap:m-0 lap:w-full aspect" style="--aspect-ratio: 16/9;">
                      

          <Item
            :headings="[
                {
                  innerContent: 'Sub heading',
                  classes: 'text-base mt-2 tab:mt-0 text-white text-center mb-3 text-caps uppercase font-sans'              
                },
                {
                  innerContent: 'Main heading',
                  classes: 'o-hdr--xl tab:text-msv text-white text-center leading-none font-serif mt-0 mb-t'              
                }                  
              ]"
            :cta="[
                {
                  innerContent: 'Shop Womens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary text-white',
                  title: 'Shop Womens'           
                },
                {
                  innerContent: 'Shop Mens',
                  url: 'http://www.jackwills.com',
                  type: 'basic',
                  classes:'inverted text-primary text-white',
                  title: 'Shop Mens'           
                }                  
              ]"
              :btnsClasses="['w-full', 'max-w-md']"
          >
            <template v-slot:image><div></div></template>
            <template v-slot:content>
              <p class="text-primary text-white text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </template>

          </Item> 

        </div>  
      </div>
  
    </div>    





    <div class="c-pat-lib__full-width"> 
      <h2 class="o-hdr o-hdr--lg font-sans text-navy-400">Cover Masthead</h2>  
      <p class="text-navy-400 mt-t">Using the modifyer class <code>o-masthead--cover</code> gives the masthead a 100vh</p>    
      <div class="c-pat-lib-component-container">   


      <div class="o-mh o-mh--cover flex-col-reverse tab:flex-col full-srn">

                <Item
                    :imgClass="['max-h-full', 'tab:max-h-screen']" 
                    :images="[
                    {
                      url: '/masthead-mobile.0f9c068c.jpg',
                      type: 'default' 
                    },
                    {
                      url: '/masthead-tab.62659b60.jpg',
                      type: 'tab' 
                    },
                    {
                      url: '/masthead-desktop.e8f29f04.jpg',
                      type: 'dt' 
                    }                   
                  ]"            
                  :headings="[
                      {
                        innerContent: 'Sub heading',
                        classes: 'text-base mt-2 tab:mt-0 text-white text-center mb-3 text-caps uppercase font-sans'              
                      },
                      {
                        innerContent: 'Main heading',
                        classes: 'o-hdr--xl tab:text-msv text-white text-center leading-none font-serif mt-0 mb-t'              
                      }                  
                    ]"
                  :cta="[
                      {
                        innerContent: 'Shop Womens',
                        url: 'http://www.jackwills.com',
                        type: 'basic',
                        classes:'inverted text-primary text-white',
                        title: 'Shop Womens'           
                      },
                      {
                        innerContent: 'Shop Mens',
                        url: 'http://www.jackwills.com',
                        type: 'basic',
                        classes:'inverted text-primary text-white',
                        title: 'Shop Mens'           
                      }                  
                    ]"
                    :contentClass="['absolute', 'items-start', 'w-4/5', 'tab:w-1/2', 'bg-primary', 'mt-0', 'tab:h-full']"
                    :btnsClasses="['w-full', 'max-w-md']"
                >
                  <template v-slot:contentWrap>
                    <div class="p-big pointer-events-auto">
                      <h1 class="o-hdr o-hdr--sm mt-2 tab:mt-0 text-white mb-3 text-caps uppercase font-sans">Sub Heading</h1> 
                      <h1 class="o-hdr o-hdr--big lgmob:text-hg tab:text-msv text-white leading-none font-serif mt-0 mb-t">Main heading</h1> <p class="text-primary text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p> <div class="o-btns w-full max-w-md"><a href="#" title="Shop Women" class="o-btn o-btn--basic inverted text-primary text-white">Shop Women</a> <a href="#" title="Shop Men" class="o-btn o-btn--basic inverted text-primary text-white">Shop Mens</a></div>
                    </div>
                  </template>

                </Item> 

              </div>             

      </div>
    </div>                   

  </section>
</template>

<script>

import ImageComponent from './Image'
import Item from './Item'

  export default {
    name:'MastheadSection',
    components: {
      ImageComponent,
      Item      
    }
  }
</script>
