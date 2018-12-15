<template lang="html">
    <div>
        <Slider/>
        <Convenient/>
        <KnowledgePill/>
        <Footerr/>
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../public/navbar.vue'
import Footerr from '../public/footer.vue'
import Slider from './sSlider.vue'
import Convenient from './convenientLife.vue'
import KnowledgePill from './knowledgePill.vue'
export default {
  components: {
    Navbar,
    Slider,
    Convenient,
    KnowledgePill,
    Footerr
  }
}
</script>

<style lang="scss">
@import '../../css/reset.scss';
</style>
