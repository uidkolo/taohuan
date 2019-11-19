<template>
  <div class="classify">
    <div class="left">
      <div class="item" v-for="(item, index) in classifys" :key="index" @mouseover='handleItem(item)'>
        <Icon :value="item.icon" :size='20' class="icon" />
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="right">
      <div class="list_item" v-for="(item, index) in childClassifys" :key="index">
        <span class="label">{{item.label}}</span>
        <div class="child" v-for="(item2, index2) in item.child" :key="index2">
          <span class="child_item">{{item2}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Classify',
  components: {
    Icon,
  },
  data(){
    return {
      childClassifys: [],
      classifys: [
        {
          name: '瓷器',
          icon: '&#xe6d6;'
        },
        {
          name: '玉器',
          icon: '&#xe705;'
        },
        {
          name: '字画',
          icon: '&#xe706;'
        },
        {
          name: '钱币',
          icon: '&#xe605;'
        },
        {
          name: '木器',
          icon: '&#xe703;'
        },
        {
          name: '铜器',
          icon: '&#xe704;'
        },
        {
          name: '珠宝',
          icon: '&#xe603;'
        },
        {
          name: '钟表西洋器',
          icon: '&#xe610;'
        },
        {
          name: '杂项',
          icon: '&#xe60a;'
        }
      ]
    }
  },
  methods: {
    handleItem(item){
      this.childClassifys = item.child
    }
  }
}
</script>

<style lang="scss" scoped>
.classify{
  height: 360px;
  width: 180px;
  display: flex;
  flex-direction: column;
  .item{
    background: #fff;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 0 15px;
    color: #000;
    .icon{
      margin-right: 15px;
      line-height: 1;
      color: #8c222c;
    }
    &:hover{
      background: #8c222c;
      color: #fff;
      transition: all 0.5s;
      .icon{
        color: #fff;
      }
    }
    &:last-child{
      border-bottom: none;
    }
  }
}
</style>