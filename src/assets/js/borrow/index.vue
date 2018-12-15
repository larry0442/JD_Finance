<template lang="html">
    <section class="Bcontent">
        <Banner/>
        <Car/>
        <Baitiao/>
        <Activity/>
        <Footerr/>
        <Navbar/>
    </section>
</template>

<script>
import Footerr from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Banner from './banner.vue'
import Car from './car.vue'
import Baitiao from './baitiao.vue'
import Activity from './activity.vue'
export default {
  components: {
    Banner,
    Car,
    Baitiao,
    Activity,
    Footerr,
    Navbar
  }
}
</script>

<style lang="scss" module>
@import "../../css/reset.scss";
.Bcontent{
  opacity: 1;
  background: url("//m.jr.jd.com/vip/borrowMoney/css/i/bj.png") 0 0 no-repeat;
  background-size: 100% auto;
  width:100%;

}
</style>
