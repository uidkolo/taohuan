<template>
  <div class="icon">
    <i class="iconfont" :style="{fontSize: `${size}px`}" v-html="value"></i>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: [
    'value',
    'size'
  ]
}
</script>>

<style scoped lag='scss'>
  @font-face {
    font-family: 'iconfont';  /* project id 1510021 */
    src: url('//at.alicdn.com/t/font_1510021_b8023lnwmt.eot');
    src: url('//at.alicdn.com/t/font_1510021_b8023lnwmt.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1510021_b8023lnwmt.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1510021_b8023lnwmt.woff') format('woff'),
    url('//at.alicdn.com/t/font_1510021_b8023lnwmt.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1510021_b8023lnwmt.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon{
    display: flex;
    align-items: center;
  }
</style>>