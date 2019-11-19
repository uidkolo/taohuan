<template>
  <div class="logo_box">
    <div class="container">
      <div class="left">
        <img class="logo" src="@/assets/logo01.png" alt="">
        <Slogan class="slogan"></Slogan>
      </div>
      <div class="right">
        <Search></Search>
        <div class="qrcode">
          <img src='@/assets/QRcode.png'>
          <span class="tip">关注淘换</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Slogan from '@/components/Slogan'
export default {
  name: 'csearch',
  components: {
    Search,
    Slogan
  },
}
</script>

<style scoped lang='scss'>
  .logo_box{
    background: #fff;
    .container{
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        height: 80px;
        display: flex;
        align-items: center;
        .logo{
          height: 60px;
        }
        .slogan{
          margin-left: 50px;
        }
      }
      .right{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .qrcode{
          margin-left: 100px;
          width: 80px;
          height: 80px;
          border: 1px solid #eee;
          position: relative;
          padding: 8px;
          img{
            width: 64px;
            height: 64px;
          }
          .tip{
            position: absolute;
            padding: 2px 5px;
            background: #fff;
            top: 70px;
            font-size: 12px;
            color: #666;
          }
        }
      }
    }
  }
</style>