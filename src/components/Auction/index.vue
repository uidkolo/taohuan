<template>
  <div class="Auction">
    <div class="title">
      <span class="label">本期拍卖</span>
      <span class="name">国玉荟萃</span>
    </div>
    <div class="timer">
      据本期结拍 5小时28分35秒 
    </div>
    <div class="imgs">
      <img src="https://images.jianloubao.com/2019/11/10/16/HXGoods/14777016_1573375542661520_w3648_h3648.JPG!rect_w100">
      <img src="https://images.jianloubao.com/2019/11/11/14/Goods/0_1573454719612577_w525_h761.png!rect_w100">
      <img src="https://images.jianloubao.com/2019/11/11/12/Goods/0_1573446433768145_w1728_h2304.png!rect_w100">
    </div>
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .Auction{
    background: #fff;
    padding: 10px;
    height: 170px;
    .title{
      line-height: 20px;
      .label{
        background: #8c222c;
        padding: 2px 5px;
        color: #fff;
        margin-right: 5px;
      }
    }
    .timer{
      line-height: 40px;
    }
    .imgs{
      display: flex;
      flex-wrap: nowrap;
      img{
        width: 90px;
        height: 90px;
        flex-grow: 1;
      }
      img:nth-child(2){
        margin: 0 5px;
      }
    }
  }
</style>