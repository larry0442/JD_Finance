<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <ul :class="$style.content">
            <li v-for="item in items" :key="item.title">
                <router-link :to="{ name: item.name}">
                    <img :src="item.src" :alt="item.title">
                    <p>{{ item.title }}</p>
                </router-link>
            </li>
        </ul>
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
      title: '导航条',
      items: [{
        name: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
        title: '首页'
      }, {
        name: 'money',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
        title: '赚钱'
      }, {
        name: 'borrow',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
        title: '借钱'
      }, {
        name: 'save',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
        title: '省钱'
      }, {
        name: 'vip',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
        title: '金融会员'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  height: 100px;
  margin: 0 !important;
  box-shadow: 0 -3px 10px rgba(0,0,0,0.05);
  >h4{
    display: none;
  }
  z-index:101;
  >h4{
    display: none;
  }
  .content{
    @include flex(row);
    justify-content: space-around;
    li{
      text-align: center;
      display: block;
      width:128px;
      a{
        text-decoration: none;
      }
      img{
        width: 44px;
        height: 44px;
        display: block;
        margin: 12px auto 6px;
      }
      p{
        font-size: 22px;
        color: #656565;
        font-family: Arial,sans-serif;
        font-weight: lighter;
      }
    }
  }
}
</style>
