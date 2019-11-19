<template>
  <div class="user_plate">
    <div class="avatar">
      <img src="@/assets/logo_default.png">
    </div>
    <span class="label">亲爱的藏友，您好！</span>
    <div class="btns">
      <span class="btn login">登录</span>
      <span class="btn register">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .user_plate{
    background: #fff;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 60px;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 30px;
        height: 30px;
      }
    }
    .label{
      margin-top: 10px;
    }
    .btns{
      display: flex;
      align-items: center;
      justify-content: center;
      .btn{
        width: 80px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        cursor: pointer;
      }
      .login{
        background: #8c222c;
        color: #fff;
        margin-right: 10px;
      }
      .register{
        border: 1px solid #8c222c;
        color: #8c222c;
      }
    }
  }
</style>