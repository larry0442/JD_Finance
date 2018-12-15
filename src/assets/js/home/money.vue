<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
              <router-link :to="{ name: item.href }">
                <dt>{{ item.title }}<span>{{ item.subtitle }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
              </router-link>
            </dl>
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
      title: '理财精选',
      items: [{
        href: 'detail',
        title: '长乐盈',
        subtitle: '180天可质押',
        rate: '5.80%',
        text: '近1年历史年化投资回报率'
      }, {
        href: 'detail',
        title: '京智0号',
        subtitle: '大数据赋能',
        rate: '6.00%',
        text: '近1月历史年化投资回报率'
      }, {
        href: 'detail',
        title: '建信养老飞益鑫',
        subtitle: '',
        rate: '4.57%',
        text: '七日年化收益率'
      }, {
        href: 'detail',
        title: '小白基金',
        subtitle: '超短期',
        rate: '4.50%',
        text: '7日年化收益率'
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
  }
  .content{
    @include flex(row);
    justify-content: space-around;
    box-sizing: border-box;
    .item{
      position: relative;
      width:50%;
      box-sizing: border-box;
      a{
        list-style: none;
        text-decoration: none;
      }
      &:after{
        content:"";
        width:1px;
        height:136px;
        display: block;
        position: absolute;
        top:50%;
        right:0;
        margin-top: -68px;
        border-right: 1px solid #ddd;
      }
      &:nth-child(2n){
        &:after{
          display: none;
        }
      }
      padding: 34px 16px;
      dt{
        font-size: 30px;
        line-height: 42px;
        color: #333;
        span{
          font-size: 22px;
          color: #ff5155;
          border: 1px solid #ff5155;
          padding: 0 8px;
          vertical-align: 1px;
          margin-left: 2px;
        }
      }
      &:nth-child(3){
        dt>span{
          display: none;
        }
      }
      dd{
        &:nth-child(2){
          font-weight: 700px;
          font-size: 44px;
          height: 58px;
          line-height: 58px;
          color: #FF5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3){
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
    &:after{
      content:"";
      display: block;
      width:100%;
      height:0;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top:-204px;
    }
  }
}
</style>
