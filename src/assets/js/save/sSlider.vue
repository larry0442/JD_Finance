<template lang="html">
    <section :class="$style.content">
        <Slider :items="items" :cname="$style.slider" />
        <div :class="$style.bannerTop">
          <!-- banner单单返福利 -->
          <router-link :to="{ name: 'detail'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t30547/96/773215797/27288/84ff41e7/5bfe003dN128f66a3.png?width=704&height=246 " alt="单单返福利">
          </router-link>
        </div>
        <div :class="$style.bannerCenter">
          <!-- 优惠券1、2 -->
          <router-link :to="{ name: 'detail'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t22930/284/1784613456/150994/5523cb69/5b697d61Nf7756ac1.png?width=750&height=480" alt="优惠券1">
          </router-link>
          <router-link :to="{ name: 'detail'}">
           <img src="//img12.360buyimg.com/jrpmobile/jfs/t16630/362/2707031119/15173/aa5acde3/5b03d5c7Nccffa23f.jpg?width=750&height=480" alt="优惠券2">
          </router-link>
        </div>
        <h6>-支付优惠-</h6>
        <div :class="$style.bannerBottom">
          <router-link :to="{ name: 'detail'}">
            <!--京豆红包天天领  -->
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t20125/139/377044579/41214/51a08cb6/5b0b947bN916e62ee.jpg?width=1500&height=442" alt="京豆红包">
          </router-link>
        </div>
        <div :class="$style.adBottom">
            <div>
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t28342/281/144513453/24267/4b82f4f3/5be91415Nbbb51d03.png?width=335&height=420" alt="3折">
              </router-link>
            </div>
            <div >
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t27631/208/1513930801/9151/55693fb9/5be4fb0bN15c07ec1.png?width=335&height=210" alt="乘车">
              </router-link>
            </div>
            <div >
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t30484/9/786057165/11167/4373b622/5bfe0459N213ac12f.png?width=335&height=210" alt="满减">
              </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  components: {
    Slider
  },
  data () {
    return {
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t30034/359/742576816/68665/c2d09f41/5bfd5421Nb10a5f29.png?width=750&height=360'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28666/203/145502384/40855/61d3becc/5be94757N4c545177.jpg?width=750&height=360'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28246/126/274676870/61389/7e5b1386/5bee28e5Naee426f8.jpg?width=750&height=360'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content{
  background: #ffffff;
  margin-bottom:20px;
  .slider{
    img{
      width:100%;
    }
  }
  .bannerTop{
    width:100%;
    // height:210px;
    padding-top: 10px;
    img{
      display: block;
      width:100%;
      height:100%;
    }
  }
  .bannerCenter{
    padding-top: 20px;
    overflow: hidden;
    img{
      display: block;
      width:50%;
      height:100%;
      float: left;
    }
  }
  >h6{
    font-size: 32px;
    font-weight:600;
    padding-left:30px;
    }
  .bannerBottom{
    padding-top: 10px;
    overflow: hidden;
    // background: #FA7268;
    img{
      display: block;
      width:100%;
      height:100%;
    }
  }
  .adBottom{
    width:100%;
    padding:0 12px;
    box-sizing:border-box;
    overflow: hidden;
    div{
      width:50%;
      float: left;
      overflow: hidden;
      position: relative;
      img{
        display:block;
        width:100%;
      }
      &:nth-child(1){
        &::before{
          content:"";
          display: block;
          position:absolute;
          top:0;
          right:0;
          width:10px;
          height:100%;
          background: #f5f5f5;
        }
      }
      &:nth-child(2){
        &::before{
          content:"";
          display: block;
          position:absolute;
          top:0;
          left:0;
          width:10px;
          height:100%;
          background: #f5f5f5;
        }
        &::after{
          content:"";
          display: block;
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:10px;
          background: #f5f5f5;
        }
      }
      &:nth-child(3){
        &::before{
          content:"";
          display: block;
          position:absolute;
          top:0;
          left:0;
          width:10px;
          height:100%;
          background: #f5f5f5;
        }
        &::after{
          content:"";
          display: block;
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:10px;
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>
