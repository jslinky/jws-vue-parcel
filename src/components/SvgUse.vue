<template>
<div :class="classes">
  <slot :ids="ids">
    <svg class="w-full h-full">
      <use :href=`#${link}`></use> 
    </svg>
  </slot>
</div>
</template>

<script>
  export default {
    name:'svg-use',
    props: {
      id: {
        type: String 
      },
      classes: {
        type: String
      }
    },
    computed: {
      link() {
        return this.id || this.ids[0]
      }
    },
    data() {
      return {
        ids: [
          'add',
          'arrowDown',
          'arrowLeft',
          'arrowRight',
          'arrowUp',
          'back',
          'bag',
          'bagLight',
          'burgerMenu',
          'checked',
          'chevronDown',
          'chevronDownLight',
          'chevronLeft',
          'chevronLeftLight',
          'chevronRight',
          'chevronRightLight',
          'chevronUp',
          'chevronUpLight',
          'close',
          'closeLight',
          'contact',
          'delivery',
          'jwDelivery',
          'hubBox',
          'giftcard',
          'directions',
          'email',
          'emailLight',
          'forward',
          'help',
          'home',
          'infoFilled',
          'international',
          'keyboardNext',
          'keyboardPrevious',
          'liveChat',
          'liveChatLight',
          'minus',
          'myAccount',
          'nextDay',
          'orders',
          'phone',
          'mouse',
          'popularFaqs',
          'post',
          'postLight',
          'returns',
          'inStoreOrdering',
          'search',
          'secure',
          'storeLocation',
          'wishlist',
          'careAdvice',
          'coolIron',
          'doNotBleach',
          'doNotDryClean',
          'doNotIron',
          'doNotTumble',
          'doNotWash',
          'dripDry',
          'dryCleanOnly',
          'dryFlat',
          'dryHanging',
          'gentleWash',
          'handWash',
          'hotIron',
          'mediumDry',
          'mediumWash',
          'mildProcessDry',
          'noChlorine',
          'proDryOnly',
          'tumbleDry',
          'tumbleLow',
          'useChlorine',
          'washSimilar',
          'facebook',
          'FACEBOOK_Navy',
          'googlePlus',
          'instagram',
          'jwblog',
          'linkedIn',
          'pinterest',
          'snapchat',
          'twitter',
          'TWITTER_Navy',
          'weibo',
          'youTube',
          'applePay',
          'visa',
          'mastercard',
          'paypal',
          'maestro',
          'dinnersClub',
          'americanExpress',
          'unionPay',
          'jcb',
          'discover',
          'storeFinderNav',
          'STORE_FINDER_Navy',
          'searchNav',
          'burgerNav',
          'bagEmptyNav'

        ]
      }
    }
  }
</script>
