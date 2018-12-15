<template lang="html">

<Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
            <div :class="$style.imgbox">
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t30721/288/449656029/22141/6cf17308/5bf3d79eN8443b953.png?width=375&height=233" alt="1">
              </router-link>
              <router-link :to="{ name: 'detail'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t26107/112/1207936110/82835/78b44bc9/5bc40c53N864d17dc.png?width=375&height=233" alt="1">
              </router-link>
            </div>
            <div :class="$style.list">
                <div :class="$style.item" v-for="item in items1" :key="item.title">
                    <router-link :to="{ name: item.href }">
                        <img :src="item.src" :alt="item.title">
                        <h4>{{item.title}}</h4>
                        <h6>{{item.subtitle}}</h6>
                    </router-link>
                </div>
            </div>
            <div :class="$style.list">
                <div :class="$style.item" v-for="item in items2" :key="item.title">
                    <router-link :to="{ name: item.href }">
                        <img :src="item.src" :alt="item.title">
                        <h4>{{item.title}}</h4>
                        <h6>{{item.subtitle}}</h6>
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
      title: '有车有钱',
      items1: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5099/26/7010/4745/5ba49a45E04bce36d/6275b5c0b703416a.png?width=90&height=90',
        title: '机票',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5678/12/7013/4702/5ba49a4fE808c96ed/2622695db5d0128b.png?width=88&height=88',
        title: '租房',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4294/38/6852/4745/5ba49a5aEeb72a2f0/b28774eadc4e1527.png?width=90&height=90',
        title: '房抵贷',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/4554/34/7050/3668/5ba49a60Ed1481e30/413fed46004f96e7.png?width=88&height=88',
        title: '分期用',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/852/23/6959/5247/5ba49a6bE45fd05f7/36437307167c7071.png?width=90&height=90',
        title: '分期商城',
        subtitle: ''
      }],
      items2: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90',
        title: '教育',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90',
        title: '车险',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88',
        title: '家装',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
        title: '医美',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
        title: '驾照',
        subtitle: ''
      }]
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
    .imgbox{
      width:100%;
      height:200px;
      margin-bottom:20px;
      overflow: hidden;
      //  &::after{
      //    content:" ";
      //    height: 0;
      //    width:100%;
      //    visibility: hidden;
      //    display:block;
      //    overflow: hidden;
      //    clear:both;
      // }
      img{
        display: block;
        width:50%;
        float:left;
      }
    }
    .list{
      @include list(row);
      background: #fff;
      padding:10px 0;
      width:100%;
      justify-content:space-around;
      a{
        text-decoration: none;
      }
      .item{
        text-align:center;
        img{
          display: inline-block;
          width:90px;
          height:90px;
        }
        h4{
          font-size: 26px;
          margin-top:12px;
          color:#666;
        }
        h6{
          font-size:20px;
          color:#ff5155;
          margin-top:12px;
        }
      }
     //  &::before{
     //    content:" ";
     //    height: 0;
     //    width:100%;
     //    visibility: hidden;
     //    display:block;
     //    overflow: hidden;
     //    clear:both;
     // }
    }
  }
}
</style>
