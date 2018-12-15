<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <Slider :options="options" :items="items" cname="insurance-slider"/>
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
      title: '保险保障',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
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
.insurance-slider{
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
.panel{
  @import "../../css/element.scss";
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
