<template>
  <div class="product_item">
    <span class="tag" v-if="info.type==0">
      <span class="value">精</span>
    </span>
    <span class="tag" v-else>
      <span class="value">美</span>
    </span>
    <img class="img" :src="info.img" />
    <div class="title">{{info.title}}</div>
    <div class="info">
      <div class="left">
        <span class="avator">
          <img src="@/assets/logo_default.png" />
        </span>
        <span class="name">{{info.name}}</span>
      </div>
      <div class="right">
        <div class="info_item">
          <Icon value="&#xe65b;"></Icon>
          <span>{{info.view}}</span>
        </div>
        <div class="info_item">
          <Icon class="icon" value="&#xe607;"></Icon>
          <span>{{info.collect}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: "ProduceItem",
  components: {
    Icon,
  },
  props: ["info"]
};
</script>

<style lang="scss" scoped>
.product_item {
  position: relative;
  width: 230px;
  // margin-right: 12.5px;
  margin-top: 12.5px;
  background: #fff;
  transition: bottom 0.3s;
  bottom: 0;
  &:hover {
    bottom: 4px;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.1);
    .title {
      color: #8c222c;
    }
  }
  .tag {
    position: absolute;
    left: 0;
    top: 0;
    .value {
      position: absolute;
      left: 6px;
      top: 6px;
      z-index: 2;
      color: #fff;
      font-size: 13px;
    }
    &::after {
      position: absolute;
      left: -34px;
      top: -34px;
      content: "";
      display: block;
      width: 0px;
      height: 0px;
      border: 34px solid transparent;
      border-right: 34px solid rgba(140, 34, 44, 0.7);
      transform: rotate(45deg);
    }
  }
  &:nth-child(5n) {
    margin-right: 0;
  }
  .img {
    width: 230px;
    height: 230px;
  }
  .title {
    padding: 0 10px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #000;
  }
  .info {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .avator {
        width: 24px;
        height: 24px;
        border-radius: 20px;
        border: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        background: #eee;
        img {
          width: 16px;
          height: 16px;
        }
      }
      .name {
        color: #666;
      }
    }
    .right {
      display: flex;
      align-items: center;
      color: #999;
      .info_item {
        display: flex;
        align-items: center;
        margin-left: 5px;
        .icon {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>