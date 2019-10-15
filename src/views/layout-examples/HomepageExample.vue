<template>
  <div>
    <IconMaster></IconMaster>
    <JwHeader></JwHeader>
    <section>
    <div class="o-mh flex-col-reverse tab:flex-row full-srn lap:left-0 lap:right-0 lap:m-0 lap:w-full no-aspect tab:aspect" style="--aspect-ratio: 19/9; --item-content-rhythm:2rem">                  
      <Item
        :images="[        
          {
            url: 'https://www.jackwills.com/images/marketing/justin-images/homepage/herom.jpg',
            type: 'default' 
          },                      
          {
            url: 'https://www.jackwills.com/images/marketing/justin-images/homepage/hero.jpg',
            type: 'tab' 
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
              classes:'inverted text-primary',
              title: 'Shop Womens'           
            },
            {
              innerContent: 'Shop Mens',
              url: 'http://www.jackwills.com',
              type: 'basic',
              classes:'inverted text-primary',
              title: 'Shop Mens'           
            }                  
          ]"
          :imgLink="'http://www.jackwills.com'"
          :contentClass="['tab:absolute', 'mt-md', 'tab:mt-0', 'tab:w-2/4', 'dt:w-3/4', 'tab:right-0', 'tab:mr-big', 'dt:mr-sm', 'w-11/12']"
          :btnsClasses="['w-full', 'max-w-md', 'text-sm']"
      >
        <template v-slot:heading>
          <img src="../../assets/homepage/textd.svg" class="w-full max-w-lg" />
        </template>            
      </Item> 

    </div> 
    </section>
    <section class="c-homepage-card tab:mx-big">
      <Item
        :images="[        
          {
            url: 'https://www.jackwills.com/images/marketing/justin-images/homepage/banner3d.jpg',
            type: 'default' 
          }             
        ]"      
        :headings="[
            {
              innerContent: 'Knitwear',
              classes: 'o-hdr--xl text-center leading-tight'              
            }
          ]"
        :cta="[
            {
              innerContent: 'Shop Women',
              url: 'http://www.jackwills.com',
              type: 'default',
              classes:'o-btn',
              title: 'Shop Women'           
            },
            {
              innerContent: 'Shop Men',
              url: 'http://www.jackwills.com',
              type: 'default',
              classes:'o-btn',
              title: 'Shop Men'           
            }  
          ]"
          :imgLink="'http://www.jackwills.com'"
          :itemClass="['o-item--card', 'tab:w-full', 'mx-auto']"
          :figureClass="['flex-row-reverse']"
          :btnsClasses="['w-full', 'max-w-md']"
      >
      <template v-slot:content>
        <p class="mb-0 text-center px-md">Lightweight jumpers, comfy cardigans and cable crews</p>
      </template>
      <template v-slot:buttons>
        <div class="flex" style="--item-pointer-e:all">
          <a href="#" class="o-btn pb-md">Shop Mens 
            <div class="ml-t" style="width: 0.5em; height: 1em;">
              <div class="w-full h-full max-w-xs mx-auto">
                <svg class="w-full h-full">
                  <use href="#chevronRightLight"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#" class="o-btn pb-md">Shop Womens
            <div class="ml-t" style="width: 0.5em; height: 1em;">
              <div class="w-full h-full max-w-xs mx-auto">
                <svg class="w-full h-full">
                  <use href="#chevronRightLight"></use>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </template>      
      </Item> 
    </section>
    <section class="c-homepage-card tab:mx-big">
      <Item
        :images="[        
          {
            url: 'https://www.jackwills.com/images/marketing/justin-images/homepage/banner3d.jpg',
            type: 'default' 
          }             
        ]"      
        :headings="[
            {
              innerContent: 'Discover new designs',
              classes: 'o-hdr--xl text-center leading-tight'              
            }
          ]"
        :cta="[
            {
              innerContent: 'Shop Women',
              url: 'http://www.jackwills.com',
              type: 'default',
              classes:'o-btn o-btn--basic tab:text-white',
              title: 'Shop Women'           
            },
            {
              innerContent: 'Shop Men',
              url: 'http://www.jackwills.com',
              type: 'default',
              classes:'o-btn o-btn--basic tab:text-white',
              title: 'Shop Men'           
            }            
          ]"
          :imgLink="'http://www.jackwills.com'"
          :itemClass="['o-item--card', 'tab:w-full', 'mx-auto']"
          :btnsClasses="['w-full', 'max-w-md']"
      >
        <template v-slot:content>
          <p class="mb-0 text-center px-md">Lightweight jumpers, comfy cardigans and cable crews</p>
        </template>
        <template v-slot:buttons>
          <div class="flex" style="--item-pointer-e:all">
            <a href="#" class="o-btn pb-md">Shop Mens 
              <div class="ml-t" style="width: 0.5em; height: 1em;">
                <div class="w-full h-full max-w-xs mx-auto">
                  <svg class="w-full h-full">
                    <use href="#chevronRightLight"></use>
                  </svg>
                </div>
              </div>
            </a>
            <a href="#" class="o-btn pb-md">Shop Womens
              <div class="ml-t" style="width: 0.5em; height: 1em;">
                <div class="w-full h-full max-w-xs mx-auto">
                  <svg class="w-full h-full">
                    <use href="#chevronRightLight"></use>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </template>        
      </Item>       
    </section>        

  </div>
</template>

<script>

import IconMaster from '../../components/IconMaster'
import JwHeader from '../../components/JwHeader'
import SvgUse from '../../components/SvgUse'
import ImageComponent from '../../components/Image'
import Item from '../../components/Item'

  export default {
    name:'HomepageExample',
    components: {
      IconMaster,
      JwHeader,
      SvgUse,
      ImageComponent,
      Item
    }
  }
</script>


<style lang="less">



section + section {
  --item-content-rhythm: var(--big);
  margin-top:var(--item-content-rhythm);
}

section:not(:first-of-type) .o-item__content {
  --item-content-rhythm:1rem;
} 

.c-homepage-card .o-item--card .o-item__figure-link {
  flex-basis:60%;
}

.c-homepage-card .flex-row-reverse {
  flex-direction:row-reverse;
}



</style>