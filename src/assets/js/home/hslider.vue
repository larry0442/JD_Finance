<template lang="html">
    <article>
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <!--第一行：图标+文字描述 list决定横排还是竖排-->
            <div :class="$style.item" v-for="item in enters" :key="item.title">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                    <h6>{{item.subtitle}}</h6>
                </router-link>
            </div>
        </section>
        <section :class="$style.list">
            <!--第二行：图标+文字描述 -->
            <div :class="$style.item" v-for="item in enters1" :key="item.title">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                    <h6>{{item.subtitle}}</h6>
                </router-link>
            </div>
        </section>
    </article>
</template>
<script>
import Slider from '../core/slider.vue'
export default {
  components: {
    Slider
  },
  data () {
    return {
      // slide的图片，URL，src
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29749/195/883164201/139307/8f3dad34/5c0125d9N95d8902b.jpg?width=750&height=320'
      },
      {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28771/197/878672284/58984/1147eb82/5c0125f7N31969b84.png?width=750&height=320'
      },
      {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27352/113/2420393008/46179/b3c7773b/5c012629N0c597994.jpg?width=750&height=320'
      },
      {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29656/64/888223268/102622/5d170d4a/5c0126acN6974d9ab.png?width=750&height=320'
      }],
      // 第一行的图标+文字，
      enters: [{
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券',
        subtitle: '100-99券'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }],
      // 第二行的图标+文字，
      enters1: [{
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
        title: '工资理财'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
        title: '众筹'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t1/3924/28/657/3552/5b9240dbE60256c31/78b52d5ab675f800.png?width=90&height=90',
        title: '租房'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t27088/243/2089650291/12365/2469f395/5bf677f9N795eec5e.png?width=120&height=120',
        title: '车主服务'
      }]
    }
  }
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .slider{
    margin-top: 100px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 25px;
    padding-bottom: 25px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
      h6{
        font-size: 20px;
        color:#ff5155;
        margin-top: 12px;
      }
    }
  }
</style>
