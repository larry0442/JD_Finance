<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.more"><a href="#">查看更多任务 ></a></div>
            <Slider :options="options" :items="items" cname="reward-slider" />
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
      title: '赏金任务',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'
      }],
      options: {
        // 分页
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        slidesPerView: 2.235, // 一个面板显示多少个slide-item
        spaceBetween: 30,
        freeMode: true
      }
    }
  }
}
</script>

<style lang="scss">
.reward-slider{
  .swiper-container{
    box-sizing: border-box;
    padding:0 24px;
    .swiper-slide{
      a{
        display: inline-block;
        width: 100%;
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
@include panel;
  >h4{
    font-weight: 600;
  }
  .content{
    padding-bottom: 40px;
    position: relative;
    .more{
      position: absolute;
      top:-68px;
      right:32px;
      color:#999;
      font-size:28px;
      a{
        text-decoration: none;
        color:inherit;
      }
    }
  }
}
</style>
