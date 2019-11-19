<template>
  <div class="info_item">
    <div class="img"><img :src="info.img" /></div>
    <div class="name">{{info.name}}</div>
    <div class="info">
      <div class="item">
        <Icon value='&#xe67b;'></Icon>
        <div class="address">{{info.address}}</div>
      </div>
      <div class="item">
        <Icon class="icon" value='&#xe60e;'></Icon>
        <span>{{info.phone}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: "InfoItem",
  components: {
    Icon,
  },
  props: ["info"]
};
</script>

<style lang="scss" scoped>
.info_item {
  position: relative;
  width: 230px;
  margin-top: 12.5px;
  background: #fff;
  overflow: hidden;
  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.1);
    .img{
      img{
        transform: scale(1.2);
      }
    }
  }
  &:nth-child(5n) {
    margin-right: 0;
  }
  .img {
    width: 230px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    img{
      width: 230px;
      height: 230px;
      transform: scale(1);
      transition: all 0.5s;
    }
  }
  .name {
    padding: 0 10px;
    line-height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #000;
    text-align: center;
  }
  .info {
    padding: 0 10px 10px;
    .item{
      display: flex;
      align-items: center;
      line-height: 24px;
      .icon{
        margin-right: 5px;
        flex-shrink: 0;
      }
      .address{
        flex-grow: 1px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>