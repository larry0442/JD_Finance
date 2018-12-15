<template lang="html">
    <section :class="$style.content">
        <Slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <!--第一行：图标+文字描述 list决定横排还是竖排-->
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                    <h6>{{item.subtitle}}</h6>
                </router-link>
            </div>
        </section>
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
        src: '//img12.360buyimg.com/jrpmobile/jfs/t26338/97/2365459370/71068/eb5192c2/5c00cfc2N3d5dfd35.jpg?width=750&height=400'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t29203/145/567933202/136261/466b4c0f/5c00d233N956f12bb.png?width=750&height=400'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t27445/125/2548201669/135074/e935e15a/5c05de72Ncd8521ca.jpg?width=750&height=400'
      }],
      enters: [{
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t28189/232/289098066/5076/dfe2d74f/5bee6bb4N4ec4cede.png?width=90&height=90',
        title: '领红包',
        subtitle: ''
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t27334/12/1829630702/5159/f8133cd6/5bee6bbdN8606cfbb.png?width=90&height=90',
        title: '领福利'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t27796/46/1836066448/4169/de69ccb0/5bee6bc3N92ca0e60.png?width=90&height=90',
        title: '领券'
      },
      {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t27850/30/1789047580/4856/13f8bcb9/5bee6bcbN996fb433.png?width=90&height=90',
        title: '支付抽奖'
      }, {
        href: 'detail',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90',
        title: '全部'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content{
  position: relative;
  background-color: #ffffff;
  margin-bottom:20px;
  .slider{
    img{
      width: 100%;
      height:100%;
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
}
</style>
