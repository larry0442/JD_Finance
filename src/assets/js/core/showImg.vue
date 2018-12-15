<template lang="html">
    <div :class="[imgClass,cname]">
        <img :src="src"/>
    </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      imgClass: 'showPic'
    }
  }
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.showPic{
  @include showPic;
}
</style>
