<template>
  <div class="search">
    <div class="tab">
      <span class="item active">藏品</span>
      <span class="item">文章</span>
    </div>
    <div class="box">
      <input class="input" type="text" placeholder="藏品名称/发布者姓名">
      <div class="btn">搜索</div>
    </div>
    <div class="history">
      <span class="item">瓷器</span>
      <span class="item">青铜器</span>
      <span class="item">字画</span>
      <span class="item">钱币</span>
      <span class="item">珠宝</span>
      <span class="item">钟表西洋器</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .search{
    width: 420px;
    .tab{
      font-size: 12px;
      display: flex;
      align-items: center;
      .item{
        margin-right: 10px;
        line-height: 24px;
        position: relative;
        cursor: pointer;
      }
      .active{
        color: #8c222c;
      }
      .active::after{
        content: '';
        display: block;
        width:0px;  
        height:0px;  
        border: 4px solid transparent;
        border-bottom: 4px solid #8c222c;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .box{
      display: flex;
      align-items: center;
      border: 2px solid #8c222c;
      .input{
        height: 36px;
        flex-grow: 1;
        padding: 0 10px;
        outline: none;
        border: none;
        font-size: 12px;
      }
      .btn{
        flex-shrink: 0;
        background: #8c222c;
        color: #fff;
        height: 36px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .history{
      .item{
        line-height: 24px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
</style>