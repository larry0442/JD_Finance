<template lang="html">
<div>
  <Headerr/>
  <Login/>
</div>
</template>

<script>
import Headerr from './header.vue'
import Login from './login.vue'
export default {
  components: {
    Headerr,
    Login
  }
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
body{
  background-color: #fff;
}
</style>
