<template lang="html">
    <section :class="$style.content">
        <div :class="$style.row">
          <router-link :to="{ name: 'detail'}">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="icon">
            <div :class="$style.info">{{name}}</div>
            <div :class="$style.right">会员福利 ></div>
          </router-link>
        </div>
        <div :class="$style.more">
            <div :class="$style.tabRow" v-for="item in items" :key="item.title">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" :alt="item.title">
                    <div :class="$style.tabInfo">{{item.title}}</div>
                    <div :class="$style.right">{{item.text}}</div>
                </router-link>
            </div>
        </div>
    <!-- <div :class="[$style.row]">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="icon">
            <div :class="$style.info">实名认证</div>
            <div :class="$style.right"></div>
        </div>
        <div :class="$style.row">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="icon">
            <div :class="$style.info">{{name}}</div>
            <div :class="$style.right">会员福利 ></div>
        </div> -->
    </section>
</template>

<script>
export default {
  data () {
    return {
      name: 'jd1445785',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
        title: '我的资产',
        text: '查看全部资产 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
        title: '我的优惠券',
        text: '查看全部 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
        title: '我的金币',
        text: '赚金币兑好物 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
        title: '我的金条',
        text: '查看额度 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
        title: '我的借钱',
        text: '查看全部产品 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
        title: '我的白条',
        text: '去提额 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70',
        title: '我的众筹',
        text: '查订单/物流 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
        title: '我的保障',
        text: '全方位保障 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54',
        title: '我的爱车',
        text: '绑车享专属福利 >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70',
        title: '实名认证',
        text: ' >'
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70',
        title: '帮助中心',
        text: ' >'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content{
  padding-bottom:100px;
  .row{
    position: relative;
    width:100%;
    height:140px;
    background: #ffffff;
    overflow: hidden;
    margin-bottom: 20px;
    img{
      width: 100px;
      border-radius: 50%;
      margin: 20px 32px 0;
      float:left;
    }
    .info{
      font-size: 32px;
      color: #000;
      height:140px;
      line-height: 140px;
      width: 47%;
      text-align: left;
      float: left;
    }
    .right{
      height: 60px;
      line-height: 60px;
      margin-top: -30px;
      font-size:28px;
      color: #999;
      overflow: hidden;
      position: absolute;
      right: 32px;
      top: 50%;
    }
  }
  .more{
    width:100%;
    margin:20px 0;
    overflow:hidden;
    .tabRow{
      position: relative;
      width:100%;
      height:122px;
      background: #ffffff;
      &::after{
        content:"";
        display: block;
        position: absolute;
        left:0;
        bottom:0;
        width:100%;
        height:2px;
        background: #f5f5f5;
      }
      img{
        width: 48px;
        border-radius: 50%;
        margin: 30px 32px 0;
        float:left;
      }
      .tabInfo{
          font-size: 32px;
          color:#999;
          height:112px;
          line-height: 112px;
          width: 47%;
          text-align: left;
          float: left;
      }
      .right{
        // height: 60px;
        height:122px;
        line-height: 122px;
        text-align: right;
        // margin-top: -30px;
        font-size:28px;
        color: #999;
        overflow: hidden;
        position: absolute;
        text-overflow: ellipsis;
        white-space: nowrap;
        right: 32px;
        top: 0;
      }
      &:nth-child(10){
        margin: 20px 0;
      }
    }
  }
}
</style>
