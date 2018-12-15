<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.top">
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t27052/245/1773499928/78249/ffb0dbbf/5bed689cN9ade6333.png?width=376&height=264" alt="居家好物">
              </router-link>
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t22264/337/1504407440/65624/b7d95603/5b2afbeaN7987d0b2.png?width=376&height=264" alt="奢品大牌">
              </router-link>
            </div>
            <div :class="$style.bottom">
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5039/38/8730/119823/5baa0522Ef94e26bc/bbd1d4dd4fd62e77.png?width=730&height=264" alt="签到">
              </router-link>
            </div>
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
      title: '精品活动'
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  >h4{
    font-weight: 600;
    text-align: left;
    position: relative;
    &:after{
      content: "";
      width:5px;
      height:40%;
      background: url("//m.jr.jd.com/vip/borrowMoney/css/i/title.png") 0 0 no-repeat;
      background-size: 100% 100%;
      display: inline-block;
      position: absolute;
      top: 30%;
      left: 20px;
      // margin-top: -.5625rem;
      // border-radius: .3125rem;
    }
  }
  .content{
    .top{
      width:100%;
      // height:250px;
      padding:5px 0;
      // box-sizing: border-box;
      img{
        display: block;
        float:left;
        width:50%;
        height:100%;
      }
    }
  }
  .bottom{
    width:100%;
    // height:260px;
    padding-top: 10px;
    img{
      display: block;
      width:100%;
      height:100%;
    }
  }
}
</style>
