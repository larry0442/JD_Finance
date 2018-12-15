<template lang="html">
    <div>
        <Info/>
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../public/navbar.vue'
import Info from './info.vue'
export default {
  components: {
    Navbar,
    Info
  }
}
</script>

<style lang="scss">
@import "../../css/reset.scss";
</style>
