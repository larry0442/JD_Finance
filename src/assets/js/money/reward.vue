<template lang="html">
    <section :class="$style.content">
        <Reward/>
    </section>
</template>

<script>
import Reward from '../home/reward.vue'
export default {
  components: {
    Reward
  }
}
</script>

<style lang="scss" module>
.content{
  background-color: #fff;
}
</style>
