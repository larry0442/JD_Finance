<template lang="html">
  <section :class="$style.content">
    <router-link :to="{ name: 'detail'}">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t24091/103/334342904/113413/13be9e7e/5b2c6e44N6ec010f7.jpg?width=1500&height=956" alt="知识胶囊">
    </router-link>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
.content{
  width:100%;
  margin: 0  0 40px 0;
  img{
    display:block;
    width:100%;
  }
}
</style>
