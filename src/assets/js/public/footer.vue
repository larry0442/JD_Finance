<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <ul :class="$style.content">
            <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
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
      title: '公司信息'
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  >h4{
    display: none;
  }
  .content{
    background: #f5f5f5;
    @include flex(clumn);
    jsutfy-content:space-between;
    li{
      width:100%;
      text-align: center;
      font-size: 24px;
      color:#999;
      height:75px;
      line-height: 75px;
      border-top:1px solid #ccc;
      &:last-child{
        margin-bottom:100px;
      }
    }
  }
}
</style>
