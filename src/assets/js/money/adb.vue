<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
          <router-link :to="{ name: 'detail' }">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t27190/327/2564146645/31932/ff10ac7a/5c04e3b7N03378711.jpg?width=750&height=200" alt="">
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
      title: '单单返京豆'
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
