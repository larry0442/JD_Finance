<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.imgbox">
                <div :class="$style.left">
                  <router-link :to="{ name: 'detail'}">
                    <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png" alt="白条信用卡">
                  </router-link>
                </div>
                <div :class="$style.right">
                  <router-link :to="{ name: 'detail'}">
                    <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png" alt="小白信用">
                    <p>小白信用</p>
                    <p>登录查看</p>
                  </router-link>
                </div>
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
      title: '白条服务'
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  >h4{
    text-align: left;
    position: relative;
    &:before{
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
    padding-bottom:20px;
    overflow: hidden;
    .imgbox{
      width:100%;
      height:300px;
      .left{
        width:63.5%;
        padding-left:1px;
        box-sizing:border-box;
        float:left;
        overflow: hidden;
        img{
          width:100%;
          height:100%;
        }
      }
      .right{
        width:36%;
        padding-right:1px;
        box-sizing: border-box;
        position: relative;
        float:left;
        overflow: hidden;
        img{
          width:100%;
          height:100%;
        }
        :nth-child(2){
          position: absolute;
          width:100%;
          text-align: center;
          font-size:24px;
          color:#ffeac9;
          // padding-right: 1px;
          // box-sizing: border-box;
          display: table-cell;
          top:36%;
          // left:30%;

        }
        :nth-child(3){
          position: absolute;
          width:100%;
          text-align: center;
          font-size:26px;
          color:#ae8339;
          display: table-cell;
          top:66.5%;
        }
      }
    }
  }
}
</style>
