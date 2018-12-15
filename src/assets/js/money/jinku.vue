<template lang="html">
    <Panel :title="title" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item1">
                <div :class="$style.left">
                    <p>3.1610<span>%</span></p>
                    <p>七日年化收益</p>
                    <p>支付/缴费/优质理财/大额理财</p>
                </div>
            </div>
            <h5>稳健灵活&nbsp;小白精选</h5>
            <div :class="$style.item2">
                <div v-for="item in items" :key="item.title" :class="$style.tab">
                  <router-link :to="{ name:item.name }">
                    <p>{{item.title}}</p>
                    <p><span>{{item.limittext}}</span></p>
                    <p>{{item.rate}}</p>
                    <p>{{item.description}}</p>
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
      title: '小金库',
      items: [{
        name: 'detail',
        title: '月月盈',
        limittext: '每日限量',
        rate: '3.97%',
        description: '近七日年化收益率'
      }, {
        name: 'detail',
        title: '年年盈',
        limittext: '每日限量',
        rate: '4.90%',
        description: '近七日年化收益率'
      }, {
        name: 'detail',
        title: '至尊盈',
        limittext: '180天后可贷出',
        rate: '6.00%',
        description: '历史年化收益率'
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
   @include list(column);
   padding:0 20px 20px;
   .item1{
     @include list(row);
     justify-content: space-around;
     height:220px;
     width:100%;
     background: url("//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png") no-repeat;
     background-size: 100% 100%;
     .left{
       font-size: 24px;
       color:#fff;
       width:60%;
       height:100%;
       margin :0 auto;
       p{
            margin:20px 0;
       }
       :nth-child(1){
         font-size: 50px;
         >span{
           font-size: 22px;
         }
       }
       :nth-child(3){
         color: #eee;
       }
     }
   }
   >h5{
     font-size: 28px;
     margin:20px 0;
   }
   .item2{
     @include list(row);
     justify-content: space-around;
     font-size: 30px;
     .tab{
       width:30%;
       height:300px;
       box-sizing: border-box;
       box-shadow: 0 0 25px  5px rgba(101,118,155,0.05);
       a{
         list-style: none;
         text-decoration: none;
       }
       p{
         text-align: center;
         font-size: 26px;
         margin: 0 10px 20px 10px;
       }
       :nth-child(1){
         font-size: 34px;
         color:#000;
         margin:25px 0;
       }
       :nth-child(2){
        span{
          display: block;
          height:26px;
          font-size: 22px;
          line-height: 26px;
          color:#fff;
          background:#5e8fff;
          border-radius:10px;

        }
       }
       :nth-child(3){
         font-size: 44px;
         font-weight: bold;
         color:#ff5451;
       }
       :nth-child(4){
         font-size: 24px;
         color:#666 !important;
       }
     }
   }
  }
}
</style>
