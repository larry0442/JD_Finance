<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.JDgold">
              <router-link :to="{ name: 'detail'}">
                <img src="//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png" alt="京东金条">
                <p>最高可借</p>
                <p><span>￥</span>300,000</p>
                <p>立即登录</p>
              </router-link>
            </div>
            <Slider :items="items" :cname="$style.slider"/>
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
      title: '京东借钱',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30595/13/280997098/57324/f8c24347/5bee212dN45cd3aec.png?width=1080&height=240'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30277/153/410933370/62629/1bde9d7f/5bf2678fN9ace94da.png?width=1080&height=240'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26329/363/1996758654/43967/b3b5da00/5bf3d427N8dd8cc7c.png?width=1080&height=240'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-top:0 !important;
  background: none !important;
  >h4{
    display: none;
  }
  .content{
    padding:20px 20px 0;
    .JDgold{
      position: relative;
      img{
        display: block;
        width:100%;
        height:100%;
      }
      p{
        color:#fff;
        position:absolute;
      }
      :nth-child(2){
        font-size:28px;
        top:18%;
        left:10%;
      }
      :nth-child(3){
        font-size:70px;
        top:30%;
        left:10%;
        span{
          font-size: 38px;
        }
      }
      :nth-child(4){
        text-align: center;
        background:url("//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png") 0 0  no-repeat;
        background-size: 100% 100%;
        font-size:26px;
        top:56%;
        left:10%;
        height:60px;
        width:180px;
        line-height: 55px;
      }
    }
    .slider{
      img{
        width: 100%;
      }
    }
  }
}
</style>
