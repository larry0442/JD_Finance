<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
          <router-link :to="{ name: 'detail'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200" alt="">
          </router-link>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      title: '白条权益中心'
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  &>h4{
    display: none;
  }
  .content{
    padding:20px 0;
    img{
      width:100%;
      // height:230px;
      display: block;
    }
  }
}
</style>
