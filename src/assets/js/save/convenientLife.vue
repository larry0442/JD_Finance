<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.list">
                <div :class="$style.item" v-for="item in items" :key="item.title">
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
      title: '便民生活',
      items: [{
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/3256/1/8339/10638/5ba98da9E4331a644/bc82f7dbfe7778b6.png?width=120&height=120',
        title: '机票',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/2912/35/8453/10948/5ba98db3E43593435/e8cd55fcebe851b2.png?width=120&height=120',
        title: '每日特惠',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/2919/38/8573/9112/5ba98db9E3096b801/0520550e7994d3a4.png?width=120&height=120',
        title: '领钢镚',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/5639/36/8328/9956/5ba98dc0Eda29abc6/27669c89e743fbda.png?width=120&height=120',
        title: '信用卡还款',
        subtitle: ''
      }, {
        href: 'detail',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t24811/310/2150446270/4499/41ff95d9/5bc43903N17a87d6f.png?width=120&height=120',
        title: '火车票',
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
    font-weight: 600;
    text-align: center;
  }
  .content{
    position: relative;
    // &::before{
    //   content:"";
    //   position: absolute;
    //   left:0;
    //   top:0;
    //   width:100%;
    //   height:1px;
    //   background: #ccc;
    // }
    .list{
      @include list(row);
      background: #ffffff;
      padding-top: 20px;
      padding-bottom:20px;
      justify-content: space-around;
      box-shadow: 0 0 20px 5px rgba(0,0,0,0.01);
      a{
        text-decoration: none;
      }
      .item{
        text-align:center;
        width:20%;
        img{
          display: inline-block;
          width:90px;height:90px;
        }
        h4{
          font-size: 26px;
          margin-top: 12px;
          color:#666;
          letter-spacing: 2px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width:100%;
        }
        h6{
          font-size: 20px;
          margin-top: 12px;
          color:#ff7268;
        }
      }
    }
  }
}
</style>
