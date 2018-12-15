<template lang="html">
    <div>
        <ImgFixedtop/>
        <Slider/>
        <Adb></Adb>
        <Reward/>
        <Ada></Ada>
        <Jinku/>
        <Insurance/>
        <Footerr/>
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../public/navbar.vue'
import Footerr from '../public/footer.vue'
import ImgFixedtop from './mfixedtop.vue'
import Slider from './mslider.vue'
import Reward from './reward.vue'
import Ada from './ada.vue'
import Adb from './adb.vue'
import Jinku from './jinku.vue'
import Insurance from './mInsurance.vue'
export default {
  components: {
    ImgFixedtop,
    Navbar,
    Slider,
    Reward,
    Footerr,
    Ada,
    Adb,
    Jinku,
    Insurance
  }
}
</script>

<style lang="scss">
@import '../../css/reset.scss';
</style>
