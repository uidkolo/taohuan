<template>
  <div class="footer">
    <div class="container">
      <div class="top">
        <div class="left">
          <img src="@/assets/logo02.png" alt="">
        </div>
        <div class="center">
          <div class="item">
            <div class="title">新手上路</div>
            <div class="list">
              <span class="list_item">新手注册</span>
              <span class="list_item">常用工作人员</span>
              <span class="list_item">24小时在线帮助</span>
            </div>
          </div>
          <div class="item">
            <div class="title">网站规则</div>
            <div class="list">
              <span class="list_item">淘换规则</span>
              <span class="list_item">纠纷处理</span>
              <span class="list_item">信誉规则</span>
            </div>
          </div>
          <div class="item">
            <div class="title">会员服务</div>
            <div class="list">
              <span class="list_item">会员规则</span>
              <span class="list_item">如何淘换</span>
              <span class="list_item">24小时在线帮助</span>
            </div>
          </div>
          <div class="item">
            <div class="title">联系方式</div>
            <div class="list">
              <span class="list_item">客服热线：<span class="tip">0597-3255888</span></span>
              <span class="list_item">广告招商：<span class="tip">13959244890</span></span>
              <span class="list_item">打假投诉：<span class="tip">13959244890</span></span>
            </div>
          </div>
        </div>
        <div class="right">
          <span class="tip">关注微信公众号</span>
          <div class="img">
            <img src="@/assets/QRcode.png">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="item">Copyright © 2014 ALL RIGHTS RESERVED. ICP经营许可证：闽ICP备14017745号-1</div>
        <div class="item">版权所有 厦门淘换文化有限公司</div>
        <div class="list">
          <img src="@/assets/bottom01.gif">
          <img src="@/assets/bottom02.jpg">
          <img src="@/assets/bottom03.png">
          <img src="@/assets/bottom04.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 30px;
  background: #fff;
  border-top: 1px solid #eee;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .left{
      img{
        height: 60px;
      }
    }
    .center{
      display: flex;
      .item {
        margin-right: 80px;
        .title {
          font-size: 16px;
          color: #000;
        }
        .list {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          .list_item{
            line-height: 24px;
            .tip{
              color: #8c222c;
              font-weight: bold;
            }
          }
        }
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      align-items: center;
      .img{
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        padding: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bottom{
    padding: 20px 0;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item{
      line-height: 24px;
      color: #999;
    }
    .list{
      margin-top: 10px;
      display: flex;
      align-items: center;
      img{
        margin: 0 10px;
      }
    }
  }
}
</style>