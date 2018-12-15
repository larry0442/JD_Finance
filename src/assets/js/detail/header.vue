<template lang="html">
  <section :class="$style.content">
    <div :class="$style.navTop">
      <span :class="$style.goback" @click="goback()"></span>
      <span :class="$style.textHeader">京东登录</span>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goback () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="scss" module>
.content{
  background-color: #ffffff;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 101;
  .navTop{
    position: relative;
    width:100%;
    height:88px;
    line-height: 88px;
    font-size: 34px;
    text-align: center;
    .goback{
      position: absolute;
      top:20px;
      left:40px;
      width: 48px;
      height: 48px;
      overflow: hidden;
      display: block;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAYpJREFUaAXtmLFOwzAQhhvKE2Rnygu1EhIDezeeho2doRIDG++BhARDNvY8QZX+f6ilArbjs1t0FmcpcWPfnf/v6sinLBbWLAOWAcuAZeA/Z6A5FXzXdSvEuj/E2/R9/3Kq2LE4l7HJ1DmIvxnH8RH2S/o0TfOA7oq/z90uShf4Kb40ntS/CCAgfgcRd1IhufbZACHx2D632P/PuYKkflkv8Yz4rVREib0YQJN4gosAtIkXAWgUnwygVXwSgGbxswDaxUcBahAfBKhFvBcA4lcozJ4wORVmNELbHU7YPz2kvpaO332lBEviKsQTzQcQR1Y26wNgJcmK0rUla32+F25AU3+8VSZdwzC8t237gYc1LgfIfs1xzL9NhkpuvwCoiyJrgfAC1AQRBKgFIgpQA8QsgHaIJADNEMkAWiFEABohxADaILIAEiBeeaLT7tzNlQpZ6+AD1pZlNpy/1U54dh95s+JKnIoAuFAAQqKhyLYY4AjiGv/GJy+MbYpUmbNlwDJgGbAMWAYSM7AH/J4Amlfxzk4AAAAASUVORK5CYII=");
      background-repeat: no-repeat;
      background-size: 100% auto;
    }
    .textHeader{

    }
  }
}
</style>
