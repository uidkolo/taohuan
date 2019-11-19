<template>
  <div class="suspend">
    <div class="item">
      <Icon class="icon" value="&#xe60c;" size='20'></Icon>
      <span>反馈</span>
    </div>
    <div class="item">
      <Icon class="icon" value="&#xe6bc;" size='20'></Icon>
      <span>客服</span>
    </div>
    <el-backtop>
      <span class="icon"><Icon value="&#xe72e;" size='20'></Icon></span>
    </el-backtop>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Suspend',
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
.suspend{
  position: fixed;
  right: 0;
  bottom: 100px;
  width: 40px;
  .item{
    width: 40px;
    height: 50px;
    background: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 18px;
    position: relative;
    cursor: pointer;
    &:hover{
      background: #8c222c;
    }  
  }
  .el-backtop{
    position: absolute;
    top: 110px;
    left: 0;
    border-radius: 0;
    box-shadow: none;
    color:#fff;
    .icon{
      background: rgba(0,0,0,.2);
      color: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover{
        color: #8c222c;
      }
    }
  }
}
</style>