<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.more"><a href="#">更多尖货 ></a></div>
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
  components: {
    Panel,
    Slider
  },
  data () {
    return {
      title: '众筹新品',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28174/190/417131104/41529/80db7464/5bf24dd8Nc031dff3.jpg?width=335&height=421'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27892/325/1984931380/71410/61ed8546/5bf24deeNf7457c6f.jpg?width=335&height=421'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26245/260/1932008857/33085/5329fce8/5bf28c0aN70c40dfd.jpg?width=335&height=421'
      }],
      options: {
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 2.235,
        spaceBetween: 30,
        freeMode: true
      }
    }
  }
}
</script>
<style lang="scss">
.product-slider{
  .swiper-container{
    box-sizing: border-box;
    padding:0 24px;
    .swiper-slide{
      a{
        display: inline-block;
        width:100%;
        img{
           width:100%;
           display: block;
           // height: 314px;
           border:1px solid #fafafa;
        }
      }
    }
  }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  >h4{
    font-weight:600;
  }
  .content{
    padding-bottom: 40px;
    position: relative;
    .more{
      position: absolute;
      top:-68px;
      right:32px;
      font-size: 28px;
      color: #999;
      a{
        text-decoration: none;
        color:inherit;
      }
    }
  }
}
</style>
