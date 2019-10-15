<template>
  <div class="c-header flex flex-row items-center">
    <div class="c-header__container">
      <div class="c-header__icon c-header__icon--burger"><svg class="w-full h-full"><use href="#burgerMenu"></use></svg></div>    
      <div class="c-logo w-full mx-auto"><svg class="w-full h-full"><use href="#jwLogo"></use></svg></div>    
      <ul class="c-header__nav">
        <li>
          <a href="#">Sale</a>
          <div class="c-menu__sub tab:absolute tab:full-srn">
            <div class="c-menu__subContainer flex max-w-6xl mx-auto">
              <div>
                <div class="c-menu__subMenu">
                  <h3 class="o-hdr ">Women's Sale</h3>
                  <div>
                  <a href="/sale-and-offers/ladies/all-sale/">All Sale</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/ladies/seasonal-savings/">Further Reductions</a>
                  </div>
                  <div>
                  <a href="/sale/ladies-sale/sale-t-shirts/">T-Shirts from £9</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/ladies/sale-hoodies/">Hoodies &amp; Sweatshirts from £18</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/ladies-sale/sale-knitwear/">Knitwear from £26</a>
                  </div>
                  <div>
                  <a href="/sale/ladies--sale/sale-loungewear/">Loungewear from £12</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/ladies/sale-coats-and-jackets/">Coats from £35</a>
                  </div>
                  <div>
                  <a href="/sale/ladies-sale/sale-dresses/">Dresses from £24</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/ladies/sale-accessories/">Bags &amp; Accessories from £8</a>
                  </div>
                  <div>
                  <a href="/women/jw-edit/back-to-school/">Sale Study Essentials</a>
                  </div>
                  <div>
                  <a href="/ladies/jw-edit/holiday-shop/">Sale Holiday Shop</a>
                  </div>
                  <h3 class="o-hdr ">Men's Sale</h3>
                  <div>
                  <a href="/sale-and-offers/gentlemen/all-sale/">All Sale</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/gentlemen/seasonal-savings/">Further Reductions</a>
                  </div>
                  <div>
                  <a href="/sale/gentlemen-s-sale/sale-tshirts/">T-Shirts from £9</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/gentlemen/sale-hoodies/">Hoodies &amp; Sweatshirts from £23</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/gentlemen-sale/sale-knitwear/">Jumpers from £24</a>
                  </div>
                  <div>
                  <a href="/sale-offers/gentlemens-sale/sale-coats-and-jackets/">Coats from £30</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/gentlemen/sale-shirts/">Shirts from £18</a>
                  </div>
                  <div>
                  <a href="/sale/gentlemen-s-sale/sale-loungewear/">Loungewear from £15</a>
                  </div>
                  <div>
                  <a href="/sale/gentlemen/sale-underwear/">Underwear &amp; Socks from £8</a>
                  </div>
                  <div>
                  <a href="/sale-and-offers/gentlemen/sale-accessories/">Bags &amp; Accessories from £10</a>
                  </div>
                  <div>
                  <a href="/men/jw-edit/back-to-school/">Sale Study Essentials</a>
                  </div>
                  <div>
                  <a href="/gentlemen/jw-edit/holiday-shop/">Sale Holiday Shop</a>
                  </div>

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
                  <h3 class="o-hdr ">Clothing</h3>
                  <div>
                  <a href="/ladies/clothing/new-in-clothing/">New Arrivals</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/hoodies-and-sweatshirts/">Hoodies &amp; Sweatshirts</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/jumpers-and-cardigans/">Knitwear</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/coats-and-jackets/">Coats</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/loungewear/">Nightwear</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/dresses/">Dresses</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/underwear-and-socks/">Underwear &amp; Socks</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/t-shirts/">T-Shirts</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/sweatpants-and-joggers/">Sweatpants &amp; Joggers</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/jeans/">Jeans</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/skirts-and-shorts/">Skirts</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/shirts/">Tops &amp; Shirts</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/trousers-and-leggings/">Leggings &amp; Trousers</a>
                  </div>
                  <div>
                  <a
                    href="/ladies/clothing/swimwear/">Swimwear</a>
                  </div>
                  <div>
                  <a href="/ladies/clothing/all-sale/">Sale</a>
                  </div>
                  <h3 class="o-hdr ">Accessories</h3>
                  <div>
                  <a href="/ladies/accessories/all-accessories/">All Accessories</a>
                  </div>
                  <div>
                  <a href="/women/accessories/hats-gloves-and-scarves/">Hats, Gloves &amp; Scarves</a>
                  </div>
                  <div>
                  <a href="/ladies/accessories/bags-and-wallets/">Bags &amp; Purses</a>
                  </div>
                  <div>
                  <a href="/ladies/accessories/bath-and-beauty/">Bath &amp; Beauty</a>
                  </div>
                  <div>
                  <a href="/ladies/accessories/shoes-and-boots/">Shoes &amp; Flip Flops</a>
                  </div>
                  <div>
                  <a href="/ladies/accessories/tech-cases/">Tech Cases</a>
                  </div>
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
        <li>
          <a href="#">Men</a>
          <div class="c-menu__sub tab:absolute tab:full-srn">
            <div class="c-menu__subContainer flex max-w-6xl mx-auto">
              <div>
                <div class="c-menu__subMenu">
                    <h4 class="o-hdr ">Clothing</h4>
                    <div><a href="#">All Clothing </a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Dresses &amp; Playsuits</a></div>
                    <div><a href="#">Jackets &amp; COats</a></div>
                    <div><a href="#">Swimwear</a></div>
                    <h4 class="o-hdr ">Heading 2</h4>                                
                    <div><a href="#">Skirts &amp; Shorts</a></div>
                    <div><a href="#">Hoodies &amp; Sweatshirts  </a></div>
                    <div><a href="#">T-Shirts</a></div>
                    <div><a href="#">Knitwear</a></div>                
                    <div><a href="#">Loungewear</a></div>
                    <h4 class="o-hdr ">Heading 3</h4>                
                    <div><a href="#">Underwear &amp; Socks</a></div>
                    <div><a href="#">Jeans</a></div>
                    <h4 class="o-hdr ">Heading 4</h4>
                    <div><a href="#">Tops &amp; Shirts</a></div>
                    <div><a href="#">Leggings</a></div>                  
                    <div><a href="#">All Clothing </a></div>
                    <div><a href="#">New Arrivals</a></div>
                    <div><a href="#">Dresses &amp; Playsuits</a></div>
                    <h4 class="o-hdr ">Heading 5</h4>                                    
                    <div><a href="#">Jackets &amp; COats</a></div>                  
                    <div><a href="#">Swimwear</a></div>                  
                    <div><a href="#">Skirts &amp; Shorts</a></div>
                    <div><a href="#">Hoodies &amp; Sweatshirts  </a></div>
                    <h4 class="o-hdr ">Heading 5</h4>                         
                    <div><a href="#">T-Shirts</a></div>
                    <div><a href="#">Knitwear</a></div>
                    <h4 class="o-hdr ">Heading 5</h4>                         
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
        <li>
          <ul>
            <li class="mobile-only"><a href="#">Accesories</a></li>
            <li class="mobile-only"><a href="#">My Account</a></li>
            <li class="mobile-only"><a href="#">Customer Services</a></li>
            <li class="mobile-only"><a href="#">Shopping Online</a></li>
            <li class="mobile-only"><a href="#">About us</a></li>
            <li class="mobile-only"><a href="#">Store Finder</a></li>
            <li class="mobile-only"><a href="#">Sign in</a></li>
          </ul>
        </li>
      </ul>
      <div class="c-header__icon c-header__icon--acc"><svg class="w-full h-full"><use href="#myAccountNav"></use></svg></div>    
      <svg class="c-header__icon c-header__icon--bag"><use href="#bagEmptyNav"></use></svg>
    </div>
  </div>
</template>

<script>

import Item from './Item'

  export default {
    name: 'JwHeader',
    components: {
      Item
    },
    methods: {
      menuSetUp(ctx) {
        const colNum = 15,
              headRowSpan = 2,
              navItems = [...ctx.querySelectorAll('.c-header__nav > li > a')], 
              menus = navItems.filter((item) => {
                const subMenu = item.parentNode.querySelector('.c-menu__subMenu')
                if(subMenu) {
                  return item
                } 
              }).reduce((total, currentVal) => {         
                    total.push([...currentVal.parentNode.querySelector('.c-menu__subMenu').children])       
                return total
              }, [])
                    
              let diff = 0

        function init() {                             
          let menuLink = []
          // Loop through each instance of sub menu
          for(let i = 0; i < menus.length; i++) {            
            let menu = menus[i],                                
                menuHeadings = checkHeadings(menu)
                // Push the top level links
                menuLink.push(menu[0].closest('.c-menu__sub').parentNode.children[0])                                       
            // // Find out associated menu items for each heading 
            setItemCount(menu, menuHeadings) 
            // Set up click event for accordian
            bindCatHeadings(menu, menuHeadings) 
          }        
          // Add class to links which have subMenus
          for(let link of menuLink) {
            link.classList.add('has-subMenu')
          }
          // Burger menu setup
          mobileMenu(ctx)
          // Bind burger
          bindMenuItems()            
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



        // Mobile menu functionality 
        /////////////////////////////////////

        /// Adds new properties to the headings object
        /// itemCount = no of related menu items
        /// items = reference to associated item elements
        function setItemCount(menu, menuHeadings) {
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
        function bindCatHeadings(menu, menuHeadings) {
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
          Array.isArray(heading) ? heading.forEach(item => item.classList.add('is-open')) : heading.classList.add('is-open')        
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
              openAccord(this, navItems, el)
            })
          })
        }      
      

        // Call init function
        init()        
      },
      observeSlots() {
        const slots = document.querySelectorAll('.c-menu__slots')

        var ro = new ResizeObserver( entries => {
          for (let entry of entries) {
            const { width } = entry.contentRect
            let size = ''
            if(width > 500) {
              size = 'large'
            } else if(width > 380) {
              size = 'medium'
            } else {
              size = 'small'
            }
            entry.target.classList.remove('small', 'medium', 'large')
            entry.target.classList.add(size)
          }
        });     

        slots.forEach(el => ro.observe(el))
      }
    },
    mounted() {

      this.menuSetUp(this.$el)
      this.observeSlots()

      const header = document.querySelector('.c-header')
      let lastPos = 0;
      let ticking = false;
      let scrollUp = false
      

      function doSomething(scroll_pos) {
        if(scroll_pos > header.offsetHeight && scrollUp) {
            header.classList.add('is-fixed')
        } else if(scroll_pos < header.offsetHeight && scrollUp) {
          if(scroll_pos < 1)
          header.classList.remove('is-fixed')
        } else {
          header.classList.remove('is-fixed')
        }
      }

      window.addEventListener('scroll', function(e) {
        scrollUp = window.scrollY > lastPos ? false : true
        lastPos = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(lastPos);
            ticking = false;
          });

          ticking = true;
        }
      });


    }
  }
</script>

<style lang="less">

//// Header
//////////////////////
:root {
  --header-height: 72;
  --nav-clip: 0%;
}

.c-header {
  position: relative;
  height:~"calc(1rem * var(--header-height) / 16)";
  --menu-trans-x: -100%;
  background:#fff;
  // transition:position 100ms ease-in-out 150ms;
}

.c-header:before {
  content:'';
  display: inline-block;
  position: relative;
  width:100vw;
  height:~"calc(1rem * var(--header-height) / 16)";
}

.c-header__container {
  height:~"calc(1rem * var(--header-height) / 16)";
  background:#fff;
  align-items: center;
  width:100vw;
  position: absolute;
  left:0;
  display: flex;  
  padding: 0 2rem;  
}

.c-header.is-fixed .c-header__container {
  position: fixed;
  top:0;
  left:0;
  z-index: 12;
  width: 100vw;
}

.c-header.is-active {
  --menu-trans-x: 0;
  --nav-clip: 200%;
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
  font-family: theme('fontFamily.serif');
  font-size: var(--sm);
  letter-spacing: 3px;
}

.c-header__nav > li:last-child > a {
  padding-right:2.5rem;
}

//// Sub Menu
//////////////////////

.c-header__nav > li {
  transition:max-height 220ms cubic-bezier(0.19, 1, 0.22, 1);  
  &.mobile-only {
    @apply bg-navy-600;
    width:100vw;
    padding:0 1.5rem;
    a {
      color:#fff;
    }
  }  
}

.c-menu__subContainer {
  padding:0 2.5rem 0;
}

.c-header li:hover .c-menu__sub {
  max-height:1000px;
}

.c-menu__subContainer > div {
  flex:1 1 auto;
}

.c-menu__subMenu > div a {
  text-transform: none;
  font-size:var(--base);
  padding:0.275rem 0;
  &:after {
    opacity:0;
  }
  &:hover {
    &:after {
      opacity:.8;
    }    
  }
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
.c-menu__slots.small:not(:first-child) {
  // position: absolute;
  visibility: hidden;
}

//// Icons
//////////////////////

.c-header__icon--acc { display: none; }
.c-header__icon--burger { 
  z-index: 2; 
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ~"translateX(-25px)";  
  svg {
    max-width:30px;
    max-height:30px;
  }
}
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
    min-height: ~"calc(100vh - calc(1rem * (var(--header-height) / var(--font-size-root)) ))";
    height: ~"calc(100% - calc(1rem * (var(--header-height) / var(--font-size-root)) ))";
    top: ~"calc(1rem * (var(--header-height) / var(--font-size-root)))";
    overflow-y:auto; 
    z-index: 1;
    transform: translate(var(--menu-trans-x), 0);
    background:rgba(255,255,255,1);
    flex-direction:column;
    width:100vw;
    padding:0 1.5rem;
    justify-content: flex-start;
    clip-path:circle(var(--nav-clip) at 7% -5%);
  }

  .c-header:not(.is-active) .c-header__nav {
    transition:transform 0ms cubic-bezier(0.86, 0, 0.07, 1) 950ms, clip-path 950ms cubic-bezier(0.86, 0, 0.07, 1);
  }

  .c-header.is-active .c-header__nav {
    transition:clip-path 950ms cubic-bezier(0.86, 0, 0.07, 1) 0ms;
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

  .has-subMenu,
  .c-menu__subMenu .o-hdr {
    background-repeat: no-repeat;
    background-size: 0.5rem;
    background-position: right 1rem center;    
  }

  .has-subMenu:not(.is-open),
  .c-menu__subMenu .o-hdr:not(.is-open) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='add' viewBox='0 0 14 14'%3E%3Cg fill='none' transform='translate(-5 -5)'%3E%3Crect width='14' height='2' x='5' y='11' fill='currentColor' fill-rule='nonzero'%3E%3C/rect%3E%3Crect width='2' height='14' x='11' y='5' fill='currentColor' fill-rule='nonzero'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E");   
  }

  .has-subMenu.is-open,
  .c-menu__subMenu .o-hdr.is-open {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='minus' viewBox='0 0 14 2'%3E%3Cg fill='none' transform='translate(-5 -11)'%3E%3Crect width='14' height='2' x='5' y='11' fill='currentColor' fill-rule='nonzero'%3E%3C/rect%3E%3C/g%3E%3C/svg%3E");
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
  
  .c-header__nav > li:last-of-type {
      width: 100vw;
      flex:1 1 auto;
      justify-content: flex-end;
      > ul {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;   
        padding:0 1rem;
        @apply bg-navy-600;
        li {
          @apply font-serif;
          font-size:var(--sm);
          letter-spacing: 3px;
          + li {
            border-top:1px solid rgba(255,255,255, .2);
          }
          a {
            color:#fff;
            padding:1rem;
            display: block;
            &:after {
              display: none;
            }
          }
        }     
      }
  }


}

@media (min-width: theme('screens.tab')) {

  :root {
    --header-height: 90;
  }

  //// Main Menu
  //////////////////////  

  .c-header__nav > li {
    height: 100%;
  }

  .c-header__nav > li:last-of-type {
    display: none;
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
    overflow: hidden;
    will-change: max-height;
  }

  .c-header li:not(:hover) .c-menu__sub {
    transition:450ms cubic-bezier(0.19, 1, 0.22, 1) 150ms;  
    max-height:0;
  }
  
  .c-header li:hover .c-menu__sub {
    transition:450ms cubic-bezier(0.19, 1, 0.22, 1);
    max-height:700px;
    z-index:2;
  }  

  .c-header:hover .c-header li:not(:hover) .c-menu__sub {
    transition:450ms cubic-bezier(0.19, 1, 0.22, 1) .2s;
  }

  .c-menu__subMenu {
    display: grid;
    grid-auto-rows:auto;
    grid-auto-flow: dense; 
    grid-gap:3px;
    grid-template-rows: repeat(15, 1fr);    
    > * {
      grid-column-start: 1; 
      min-width: 220px;     
      min-height:25px;
      &:nth-child(1n + 17) {
        grid-column-start: 2;
      }
      &:nth-child(1n + 31) {
        grid-column-start: 3;
      }    
    }   
  }

  .c-menu__subContainer {
    padding:0.75rem 1rem 2rem;
    min-height:548px;
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

  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(16),
  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(15),
  .c-menu__subMenu > *:nth-child(1) ~ div:nth-child(16) + .o-hdr {
    grid-column-start: 2;
    grid-row: span 1;
    align-items: flex-start;
  }

  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(31),
  .c-menu__subMenu > *:nth-child(1) ~ .o-hdr:nth-child(30),
  .c-menu__subMenu > *:nth-child(1) ~ div:nth-child(31) + .o-hdr {
    grid-column-start: 3;
    grid-row: span 1;
    align-items: flex-start;
  }  


  .c-menu__subMenu .o-hdr {
    --hdr-tt: uppercase;
    --hdr-fs: var(--sm);
    --hdr-ff: theme('fontFamily.serif');
    --hdr-ls:3px;
  }  

  //// Menu Slots
  //////////////////////  
  .c-menu__slots { display: flex; }  

  //// Icons
  //////////////////////  
  .c-header__icon--acc { display: block; }  
  .c-header__icon--burger { display: none; }

}

@media (min-width: theme('screens.lap')) {

  .c-menu__subMenu > * {
      min-width: 270px;     
  }  

}


</style>