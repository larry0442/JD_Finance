<template lang="html">
  <section :class="$style.content">
    <router-link :to="{ name: 'detail' }">
      <Pic  :src="src" />  <!-- pic 仅仅包含一张图片，需要一个外容器包裹-->
    </router-link>
  </section>
</template>

<script>
import Pic from '../core/showImg.vue'
export default {
  components: {
    Pic
  },
  data () {
    return {
      src: '//img12.360buyimg.com/jrpmobile/jfs/t28858/7/1058667857/15792/606d0f10/5c050f76Ndb650556.png?width=750&height=120'
    }
  }
}
</script>
<style lang="scss" module>
  .content{
      width:100%;
      height:120px;
      position: fixed;
      top:0;
      left:0;
      z-index:101;
  }
</style>
