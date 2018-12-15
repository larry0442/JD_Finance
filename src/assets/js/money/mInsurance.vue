<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.top">
                <div :class="$style.left">
                    <div :class="$style.wrap">
                        <p :class="$style.title">200万</p>
                        <p :class="$style.subtitle">个人账户安全险</p>
                        <div :class="$style.btn">立即查看</div>
                        <span :class="$style.label">今日推荐</span>
                    </div>
                </div>
                <div :class="$style.right">
                    <div :class="$style.icon">
                        <div :class="$style.list">
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56" alt="车险">
                                <p>车险</p>
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56" alt="人寿">
                                <p>人寿</p>
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56" alt="意外">
                                <p>意外</p>
                              </router-link>
                            </div>
                        </div>
                        <div :class="$style.list">
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56" alt="财产">
                                <p>财产</p>
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56" alt="健康">
                                <p>健康</p>
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="{ name: 'detail'}">
                                <img src="//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56" alt="旅行">
                                <p>旅行</p>
                              </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="$style.banner">
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t26602/283/2096307150/22915/84ea03dd/5bf776d6N7e837d4b.jpg?width=750&height=200" alt="车险">
              </router-link>
            </div>
            <h6>热销保险</h6>
            <Slider :options="options"
                    :items="items"
                    cname="mInsurance-slider">
            </Slider>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4348/19/6052/23261/5ba1b654E348ecfa8/6db1f6144439c704.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28279/347/570877273/11310/f78c7b5/5bf76a9eN5b755f88.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29101/62/394095356/10954/b75a42b/5bf22127N614ee042.jpg?width=210&height=260'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t28720/143/415348627/10924/71f1924/5bf22160Nfb3c2621.jpg?width=210&height=260'
      }],
      options: {
        slidesPerView: 2.5,
        spaceBetween: 30,
        freeMode: true
      }
    }
  }
}
</script>

<style lang="scss">
.mInsurance-slider{
  .swiper-container{
      box-sizing: border-box;
      padding:0 24px;
    .swiper-slide{
      a{
        display: block;
        width:100%;
        img{
          width:100%;
          display: block;
          // height:280px;
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
    font-weight:600;
  }
  .content{
     padding:0 20px 20px 20px;
    .top{
      background-color: #fff;
      height:260px;
      .left{
        // width:220px;
        width:40%;
        height:100%;
        float: left;
        box-shadow: 0 0 60px 5px rgba(0,0,0,0.05);
        .wrap{
          padding:1px;
          width:100%;
          height:100%;
          position: relative;
           div,p{
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .title{
            font-size:50px;
            color:#1bd5c7;
            margin:62px 0 10px 0;
          }
          .subtitle{
            font-size:24px;
            margin:20px 0;
            color:#aaa;
          }
          .btn{
            @include btn;
            height:30px;
            line-height: 30px;
            width:140px;
            font-size:22px;
            margin:15px 30px;
            border-radius:20px;
            background-color: #1bd5c7;
            border:none;
          }
          span{
            position:absolute;
            display: block;
            top:0;
            left:0;
            width:100px;
            height:40px;
            line-height: 40px;
            font-size:22px;
            text-align: center;
            color:#fff;
            background:#000;
          }
        }
      }
      .right{
        // width:360px;
        width:55%;
        height:100%;
        float: left;
        margin-left: 5%;
        box-shadow: 0 0 60px 5px rgba(0,0,0,0.05);
        box-sizing: border-box;
        .icon{
          width:100%;
          height:100%;
          :nth-child(1){
           }
          .list{
            @include list(row)
            width:100%;
            height:50%;
            justify-content: space-around;
            div{
              width:33%;
              height:100%;
              text-align: center;
              a{
                text-decoration: none;
              }
              img{
                display:block;
                width:56px;
                height:56px;
                margin: 30px auto 1px;
              }
              p{
                font-size:24px;
                color:#000 !important;
                padding:0 20px;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
              }
            }
          }
        }

      }
    }
    .banner{
      margin:20px 0;
      padding:1px;
      width:100%;
      height:200px;
      img{
        width:100%;
        height:100%;
        display: block;
      }
    }
    h6{
      font-size:28px;
      margin:30px 0;
    }

  }
}
</style>
