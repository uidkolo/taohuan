<template>
  <div class="nav_header">
    <div class="container">
      <div class="left">亲爱的藏友，您好，欢迎来到淘换网！</div>
      <div class="right">
        <div class="item">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              我的收藏<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>收藏的物品</el-dropdown-item>
              <el-dropdown-item>收藏的文章</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="item">广告合作</div>
        <div class="item">意见反馈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang='scss'>
  .nav_header{
    height: 30px;
    background: #ededed;
    .container{
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #666;
      .left{
        flex-grow: 1;
      }
      .right{
        display: flex;
        align-items: center;
        .item{
          margin-left: 10px;
          padding-left: 10px;
          border-left: 1px solid #999;
          line-height: 10px;
          cursor: pointer;
          &:first-child{
            border-left: none;
          }
          .el-dropdown{
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
  }
</style>