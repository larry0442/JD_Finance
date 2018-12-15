<template lang="html">
    <div>
        <Headerr/>
        <Slider/>
        <Money/>
        <Reward/>
        <Insurance/>
        <Product/>
        <Footerr/>
        <Navbar/>
    </div>
</template>

<script>
import Headerr from '../public/header.vue'
import Footerr from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
import Slider from './hslider.vue'
import Money from './money.vue'
import Reward from './reward.vue'
import Insurance from './insurance.vue'
import Product from './product.vue'
export default {
  components: {
    Headerr,
    Slider,
    Money,
    Reward,
    Insurance,
    Product,
    Footerr,
    Navbar
  }
}
</script>

<style lang="scss">
@import '../../css/reset.scss';
</style>
