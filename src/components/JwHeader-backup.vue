<template>
  <div class="c-header flex flex-row items-center">
    <div class="c-header__icon c-header__icon--burger"><svg class="w-full h-full"><use href="#burgerMenu"></use></svg></div>    
    <div class="c-logo w-full mx-auto"><svg class="w-full h-full"><use href="#jwLogo"></use></svg></div>    
    <ul class="c-header__nav">
      <li>
        <a href="#">New</a>
        <div class="c-menu__sub tab:absolute tab:full-srn">
          <div class="c-menu__subContainer flex max-w-6xl mx-auto">
            <div class="c-menu__slots flex">
              <div class="c-menu-slot">
                <Item
                  :headings="[
                      {
                        innerContent: 'Discover new designs',
                        classes: 'normal-case font-sans text-base text-left leading-tight'              
                      }
                    ]"
                  :figureClass="['px-t']"
                  :cta="[
                      {
                        innerContent: 'Shop Now',
                        url: 'http://www.jackwills.com',
                        type: 'link',
                        classes:'normal-case text-sm',
                        title: 'Shop Now'           
                      }
                    ]"
                    :imgLink="'http://www.jackwills.com'"
                >

                </Item>
              </div>
              <div class="c-menu-slot">
                <Item
                  :headings="[
                      {
                        innerContent: 'Discover new designs',
                        classes: 'normal-case font-sans text-base text-left leading-tight'              
                      }
                    ]"
                  :figureClass="['px-t']"
                  :cta="[
                      {
                        innerContent: 'Shop Now',
                        url: 'http://www.jackwills.com',
                        type: 'link',
                        classes:'normal-case text-sm',
                        title: 'Shop Now'           
                      }
                    ]"
                    :imgLink="'http://www.jackwills.com'"
                >

                </Item>
              </div>   
              <div class="c-menu-slot">
                <Item
                  :headings="[
                      {
                        innerContent: 'Discover new designs',
                        classes: 'normal-case font-sans text-base text-left leading-tight'              
                      }
                    ]"
                  :figureClass="['px-t']"
                  :cta="[
                      {
                        innerContent: 'Shop Now',
                        url: 'http://www.jackwills.com',
                        type: 'link',
                        classes:'normal-case text-sm',
                        title: 'Shop Now'           
                      }
                    ]"
                    :imgLink="'http://www.jackwills.com'"
                >

                </Item>
              </div>                            
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="#">Women</a>
        <div class="c-menu__sub tab:absolute tab:full-srn">
          <div class="c-menu__subContainer flex max-w-6xl mx-auto">
            <div>
              <div class="c-menu__subMenu">
                  <h4 class="o-hdr font-sans tracking-wider">Clothing</h4>
                  <div><a href="#">All Clothing </a></div>
                  <div><a href="#">New Arrivals</a></div>
                  <div><a href="#">Dresses &amp; Playsuits</a></div>
                  <div><a href="#">Jackets &amp; COats</a></div>
                  <div><a href="#">Swimwear</a></div>
                  <h4 class="o-hdr font-sans tracking-wider">Heading 2</h4>                                
                  <div><a href="#">Skirts &amp; Shorts</a></div>
                  <div><a href="#">Hoodies &amp; Sweatshirts  </a></div>
                  <div><a href="#">T-Shirts</a></div>
                  <div><a href="#">Knitwear</a></div>                
                  <div><a href="#">Loungewear</a></div>
                  <h4 class="o-hdr font-sans tracking-wider">Heading 2</h4>                
                  <div><a href="#">Underwear &amp; Socks</a></div>
                  <div><a href="#">Jeans</a></div>
                  <h4 class="o-hdr font-sans tracking-wider">Heading 2</h4>
                  <div><a href="#">Tops &amp; Shirts</a></div>
                  <div><a href="#">Leggings</a></div>
                  <!-- <h4 class="o-hdr font-sans text-sm tracking-wider">Heading 2</h4> -->
                  <div><a href="#">All Clothing </a></div>
                  <div><a href="#">New Arrivals</a></div>
                  <div><a href="#">Dresses &amp; Playsuits</a></div>
                  <div><a href="#">Jackets &amp; COats</a></div>
                  <div><a href="#">Swimwear</a></div>
                  <div><a href="#">Skirts &amp; Shorts</a></div>
                  <div><a href="#">Hoodies &amp; Sweatshirts  </a></div>
                  <div><a href="#">T-Shirts</a></div>
                  <div><a href="#">Knitwear</a></div>
                  <div><a href="#">Loungewear</a></div>
                  <div><a href="#">Underwear &amp; Socks</a></div>
                  <!-- <div><a href="#">Jeans</a></div>
                  <div><a href="#">Tops &amp; Shirts</a></div>
                  <div><a href="#">Leggings</a></div> -->
              </div>
            </div>
            <div class="c-menu__slots flex">
              <div class="c-menu-slot">
                <Item
                  :headings="[
                      {
                        innerContent: 'Discover new designs',
                        classes: 'normal-case font-sans text-base text-left leading-tight'              
                      }
                    ]"
                  :figureClass="['px-t']"
                  :cta="[
                      {
                        innerContent: 'Shop Now',
                        url: 'http://www.jackwills.com',
                        type: 'link',
                        classes:'normal-case text-sm',
                        title: 'Shop Now'           
                      }
                    ]"
                    :imgLink="'http://www.jackwills.com'"
                >

                </Item>
              </div>
              <div class="c-menu-slot">
                <Item
                  :headings="[
                      {
                        innerContent: 'Discover new designs',
                        classes: 'normal-case font-sans text-base text-left leading-tight'              
                      }
                    ]"
                  :figureClass="['px-t']"
                  :cta="[
                      {
                        innerContent: 'Shop Now',
                        url: 'http://www.jackwills.com',
                        type: 'link',
                        classes:'normal-case text-sm',
                        title: 'Shop Now'           
                      }
                    ]"
                    :imgLink="'http://www.jackwills.com'"
                >

                </Item>
              </div>              
            </div>
          </div>
        </div>        
      </li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Accesories</a></li>
    </ul>
    <div class="c-header__icon c-header__icon--acc"><svg class="w-full h-full"><use href="#myAccountNav"></use></svg></div>    
    <svg class="c-header__icon c-header__icon--bag"><use href="#bagEmptyNav"></use></svg>

  </div>
</template>

<script>

import Item from './Item'

  export default {
    name: 'JwHeader',
    components: {
      Item
    },
    mounted() {


      function menuSetUp(ctx) {


        const colNum = 15,
                    headRowSpan = 2,
                    navItems = [...ctx.querySelectorAll('.c-header__nav > li > a')], 
                    // take this out
                    menu = [...ctx.querySelector('.c-menu__subMenu').children],
                    menuHeadings = checkHeadings(menu)
                    
              let diff = 0


        function init() {
          // Populate menu columns with empty divs if needed for grid
          menuColumns()  /// IN LOOP
          // Find out associated menu items for each heading 
          setItemCount() /// IN LOOP
          // Set up click event for accordian
          bindCatHeadings() /// IN LOOP     
          // Burger menu setup
          mobileMenu(ctx)
          // Bind burger
          bindMenuItems()            
        }

        function menuColumns() {

          // Set value of diff, which is number of items to populate entire grid column is number if items is over colNum
          if(menu.length > colNum) {
            if(menu.length < (colNum*2)) {
              diff = (colNum*2) - menu.length
            } else if(menu.length < (colNum*3)) {
              diff = (colNum*2) - menu.length
            } else if(menu.length < (colNum*4)) {
              diff = (colNum*2) - menu.length
            }
          } 

          if(diff > 0) {
            // Get number of headings and subtract the first heading instance (as it spans 1 row)
            let headingSpans = (menuHeadings.length) - 1,
                noOfOneRowHeadings = 0

            // Find the number of headings which fall at index colNum (or multiples of it)        
            menuHeadings.forEach((heading) => {
              let index = heading.index,
                  isIndexMultiple = isWholeNumber(index / colNum)
              if(isIndexMultiple > 0) {
                noOfOneRowHeadings+= 1
              }
            })
            // If there are any, subtract them from length of headings
            if(noOfOneRowHeadings > 0) { headingSpans-= noOfOneRowHeadings }

            // Update headingSpans var by multiplying the number of headings by the headRowSpan (number of rows it should occupy)
            headingSpans*= headRowSpan  
            // Get the number of spaces needed to populate the entire last column
            let diffs = headingSpans - diff
            // If there are spaces needed, populate them
            if(diffs > 0) {
              for(let i = 0; i < diffs; i++) {
                let newEl = createMenuItem()
                insertAfter(newEl, menu[menu.length-1])          
              } 
            }       
          }
        }

        // Returns instances of all headings, including the node and index 
        function checkHeadings(menuEl) {
          let headings = []
          menuEl.forEach((el, index) => {
            if(el.className.includes('o-hdr')) {
                headings.push({
                  el,
                  index
                })
            }
          })
          return headings
        }

        // Helper function - If whole number return it
        function isWholeNumber(value) {
          if (value % 1 === 0) {
            return value
          } else {
            return 0
          }
        }        

        // Helper function - Inset DOM el 
        function insertAfter(newNode, referenceNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }

        // Helper function - Creates empty div
        function createMenuItem() {
          let el = document.createElement("div")
          return el
        }


        // Mobile menu functionality 
        /////////////////////////////////////

        /// Adds new properties to the headings object
        /// itemCount = no of related menu items
        /// items = reference to associated item elements
        function setItemCount() {
          let lengthMinusOne = menuHeadings.length - 1
          for(let i = 0; i <= lengthMinusOne; i++) {
            if(i == lengthMinusOne) {
              menuHeadings[lengthMinusOne].itemCount = associatedItems(menuHeadings[lengthMinusOne].index, menu.length)
              menuHeadings[lengthMinusOne].items = setIds(menuHeadings[lengthMinusOne].index, menuHeadings[lengthMinusOne].itemCount, menu)
            } 
            else {
              let j = i + 1
              menuHeadings[i].itemCount = associatedItems(menuHeadings[i].index, menuHeadings[j].index)
              menuHeadings[i].items = setIds(menuHeadings[i].index, menuHeadings[i].itemCount, menu)
            }
          }
        }        

        // return associated menu items
        function setIds(index, itemCount, menu) {
          let items = []
          for(let i = index + 1; i <= index + itemCount; i++) {
            items.push(menu[i])            
          }
          return items
        }

        /// difference between each heading
        function associatedItems(a, b) {
          return (b - a) - 1
        }        


        // Bind click event on menu headings 
        // Sets 'is-open' class to associated items
        function bindCatHeadings() {
          menuHeadings.forEach(function(el) { 
          let header = el.el
            header.addEventListener('click', function(e) {
              e.preventDefault()
              openAccord(this, menu, el.items)
            })
          })
        }

        // Accordian functionality - add / removes 'is-open' class
        function openAccord(bindTo, removeFrom, addTo) {
          if(bindTo.className.includes('is-open')) {              
            removeClassItems(removeFrom)  
            bindTo.classList.remove('is-open')       
          } else {
            removeClassItems(removeFrom)  
            bindTo.classList.add('is-open')
            addClassItems(addTo)   
          }        
        }

        function addClassItems(heading) {
          heading.forEach(item => item.classList.add('is-open'))
        }  

        function removeClassItems(menu) {
          menu.forEach((item) => {   
            if(item.className.includes('is-open')) {
              item.classList.remove('is-open')
            }        
          })             
        }         

        // Burger menu
        function mobileMenu(_this) {
          const el = _this,
                btn = el.querySelector('.c-header__icon--burger')              
            btn.addEventListener('click', function() {
              el.classList.toggle('is-active')
              if(el.className.includes('is-active')) {
                // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;              
              } else {
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);              
              }
            })   
        }

        function bindMenuItems() {
          navItems.forEach(function(el) { 
            el.addEventListener('click', function(e) {
              e.preventDefault()
              openAccord(this, navItems, navItems)
            })
          })
        }      
      

        // Call init function
        init()

      }

      menuSetUp(this.$el)

    }
  }
</script>

<style lang="less">

//// Header
//////////////////////

.c-header {
  margin-top:57px;
  position: relative;
  height:90px;
  padding: 0 2rem;
  --menu-trans-x: -100%;
}

.c-header.is-active {
  --menu-trans-x: 0;
}

//// Main Menu
//////////////////////

.c-header__nav {
  align-self:stretch;
  display:flex;
  align-items: center;
  justify-content: center;
  flex:1 1 0%;
  margin:0;
}

.c-header__nav > li {
  text-transform: uppercase;
  display: flex;
  align-items: center;  
}

.c-header__nav > li > a {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left:1.25rem;
  padding-right:1.25rem;
}

.c-header__nav > li:last-child > a {
  padding-right:2.5rem;
}

//// Sub Menu
//////////////////////
.c-menu__subContainer {
  padding:0 2.5rem 0;
}

.c-header li:hover .c-menu__sub {
  max-height:1000px;
  transition:max-height 2000ms cubic-bezier(0.19, 1, 0.22, 1);
}

.c-menu__subContainer > div {
  flex:1 1 auto;
}

.c-menu__subMenu > div a {
  text-transform: none;
  font-size:var(--base);
  padding:0.275rem 0;
}

.c-header__nav > li > a:after {
  display: none;
}

//// Menu Slots
//////////////////////
.c-menu__slots { display: none; }
.c-menu-slot {
  --item-content-rhythm: 0.25rem;
  --item-content-align: flex-start;
}

//// Icons
//////////////////////

.c-header__icon--acc { display: none; }
.c-header__icon--burger { z-index: 2; }
.c-header__icon {
  height:55px;
  width:55px;
}
.c-logo {
  max-width: 165px;
  height: 30px;
}



@media (max-width: theme('screens.max.tab')) {

  //// Main Menu
  //////////////////////  

  .c-header__nav {
    position: fixed;
    left: 0;
    min-height: 100vh;
    height:100%;
    overflow-y:auto; 
    z-index: 1;
    transform: translate(var(--menu-trans-x), 0);
    background:rgba(255,255,255,1);
    flex-direction:column;
    width:100vw;
    transition:all 250ms cubic-bezier(0.86, 0, 0.07, 1);
    padding:0 1.5rem;
  }

  .c-header__nav > li {
    width:100%;
    flex-direction: column;
  }  

  .c-header__nav > li + li {
    border-top:1px solid theme('colors.navy.100')
  }    

  .c-header__nav > li > a,
  .c-menu__sub {
    width:100%;
  }

  .c-header__nav > li > a,
  .c-menu__subMenu .o-hdr {
    padding:1rem 0;
  }

  //// Mobile menu accordion
  //////////////////////

  .c-header__nav > li > a:not(.is-open) + .c-menu__sub,
  .c-menu__subMenu > div:not(.is-open) {
      opacity:0;
      max-height: 0;
      overflow: hidden;
      min-height: auto;
  }  

  //// Sub Menu
  //////////////////////  

  .c-menu__subMenu > div a {
    display: inline-block;
    padding: .5rem 0;
    margin-left: 1.5rem;    
  }  

  .c-menu__subMenu .o-hdr {
    --hdr-tt: none;
    --hdr-fs: var(--base); 
  }

  .c-menu__subMenu > div {
    opacity:1;
    max-height:40px;
    transition: 
      max-height 180ms cubic-bezier(0.95, 0.05, 0.795, 0.035), 
      opacity 180ms cubic-bezier(0.95, 0.05, 0.795, 0.035) 180ms;
  }

}

@media (min-width: theme('screens.tab')) {

  //// Main Menu
  //////////////////////  

  .c-header__nav > li {
    height: 100%;
  }

  .c-header__nav > li:first-child > a {
    padding-left:2.5rem;
    &:before {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      left: -50%;    
    }
  }    

  .c-header__nav > li + li > a {
    padding-left:1rem;
  }  

  //// Sub Menu
  //////////////////////    

  .c-menu__sub {
    z-index:1;
    background:#fff;
    top:90px;
    max-height:0;
    overflow: hidden;
    will-change: max-height;
    transition:max-height 220ms cubic-bezier(0.19, 1, 0.22, 1);  
  }

  .c-menu__subMenu {
    display: grid;
    grid-auto-rows:auto;
    grid-auto-flow: dense; 
    grid-gap:3px;
    > * {
      grid-column-start: 1; 
      min-width: 220px;     
      min-height:25px;
      &:nth-child(1n + 17) {
        grid-column-start: 2;
      }
      &:nth-child(1n + 34) {
        grid-column-start: 3;
      }    
    }   
  }

  .c-menu__subContainer {
    padding:0.75rem 1rem 2rem;
  } 
  
  .c-menu__subMenu > div a {
    font-size:var(--sm);
  }    

  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr {
    grid-row: span 2;
    display: flex;
    align-items: flex-end;
    padding-bottom:0.275rem;
  }

  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(16) {
    grid-column-start: 2;
    grid-row: span 1;
    align-items: flex-start;
  }

  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(16) {
    grid-column-start: 2;
    grid-row: span 1;
    align-items: flex-start;
  }

  .c-menu__subMenu .o-hdr {
    --hdr-tt: uppercase;
    --hdr-fs: var(--sm);
  }  

  //// Menu Slots
  //////////////////////  
  .c-menu__slots { display: flex; }  

  //// Icons
  //////////////////////  
  .c-header__icon--acc { display: block; }  
  .c-header__icon--burger { display: none; }

}


</style>