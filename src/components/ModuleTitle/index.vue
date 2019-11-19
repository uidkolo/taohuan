<template>
  <div class="module_title">
    <div class="left">
      <span class="icon">
        {{tier}}F
      </span>
      <span class="title" v-if="title">{{title}}</span>
      <div class="tab" v-if="tab">
        <span :class="{item, active: index==activeIndex}" v-for="(item, index) in tab" :key='index' @click="handleTab(index)">{{item}}</span>
      </div>
    </div>
    <div class="center" v-if="next">
      <div class="next">
        <Icon class="icon" value="&#xe604;" size='12'></Icon>
        <span>换一批</span>
      </div>
    </div>
    <div class="right">
      <div class="more" v-if='more'>
        <span>查看更多</span>
        <Icon class="icon" value="&#xe68a;" size='12'></Icon>
      </div>
    </div>
  </div>  
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'ModuleTitle',
  components: {
    Icon,
  },
  props: ['tier', 'title', 'tab', 'next', 'more'],
  data(){
    return {
      activeIndex: 0
    }
  },
  methods:{
    handleTab(index){
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.module_title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8c222c;
  .left{
    display: flex;
    align-items: flex-end;
    .icon{
      font-size: 30px;
      font-weight: bold;
      color: #8c222c;
    }
    .title{
      font-size: 20px;
      color: #000;
      margin-left: 10px;
      line-height: 36px;
    }
    .tab{
      margin-left: 20px;
      display: flex;
      align-items: center;
      .item{
        height: 36px;
        color: #000;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .active{
        background: #8c222c;
        color: #fff;
      }
    }
  }
  .center{
    .next{
      margin-left: 50px; 
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon{
        margin: 0 5px;
      }
      &:hover{
        color: #8c222c;
      }
    }
  }
  .right{
    display: flex;
    align-items: center;
    .more{
      margin-left: 50px; 
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon{
        margin: 0 5px;
      }
      &:hover{
        color: #8c222c;
      }
    }
  }
}
</style>