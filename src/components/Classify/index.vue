<template>
  <div class="classify">
    <div class="item" v-for="(item, index) in classifys" :key="index" @mouseover='handleItem(item)'>
      <Icon :value="item.icon" :size='20' class="icon" />
      <span>{{item.name}}</span>
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
          name: '陶器',
          icon: '&#xe621;'
        },
        {
          name: '瓷器',
          icon: '&#xe6d6;'
        },
        {
          name: '玉器',
          icon: '&#xe705;'
        },
        {
          name: '青铜器',
          icon: '&#xe704;'
        },
        {
          name: '金银器',
          icon: '&#xe608;'
        },
        {
          name: '中国书画',
          icon: '&#xe706;'
        },
        {
          name: '油画雕塑',
          icon: '&#xe630;'
        },
        {
          name: '钱币',
          icon: '&#xe605;'
        },
        {
          name: '古籍刊报',
          icon: '&#xe60f;'
        },
        {
          name: '邮品票证',
          icon: '&#xe602;'
        },
        {
          name: '竹/木/漆器',
          icon: '&#xe606;'
        },
        {
          name: '织绣品',
          icon: '&#xe624;'
        },
        {
          name: '紫砂',
          icon: '&#xe6e5;'
        },
        {
          name: '奇石石艺',
          icon: '&#xe6a6;'
        },
        {
          name: '珠宝矿石',
          icon: '&#xe609;'
        },
        {
          name: '民俗品',
          icon: '&#xe625;'
        },
        {
          name: '造像宗教用品',
          icon: '&#xe61b;'
        },
        {
          name: '杂项',
          icon: '&#xe611;'
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
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  .item{
    background: #fff;
    width: 100px;
    flex-shrink: 0;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
    padding: 0 10px;
    color: #000;
    .icon{
      margin-right: 5px;
      width: 20px;
      flex-shrink: 0;
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