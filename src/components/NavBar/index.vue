<template>
  <div class="navbar">
    <div class="container">
      <strong class="item">首页</strong>
      <strong class="item">淘换</strong>
      <strong class="item">博物馆</strong>
      <strong class="item">古玩城</strong>
      <strong class="item">业内资讯</strong>
      <strong class="item">新闻资讯</strong>
      <strong class="item">衍生服务</strong>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang='scss'>
  .navbar{
    background: #fff;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.1);
    .container{
      height: 40px;
      display: flex;
      align-items: center;
      .item{
        font-size: 14px;
        padding: 0 40px;
      }
    }
  }
</style>