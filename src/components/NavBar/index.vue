<template>
  <div class='navbar' :class="{fixed: fixed}">
    <div class="container">
      <div class="nav_item active">
        <Icon class="icon" value='&#xe617;' size='14'></Icon>
        <span>首页</span>
      </div>
      <div class="nav_item">
        <div class="container-exibition-text is-animate text-center style3">
          <div class="item" v-for="(item, index) in ['淘','换']" :style="{animationDelay: `${index/10}s` }" :key='index'>{{item}}</div>
        </div>
        <div class="is-animate text-center style4 hot">
          <div class="item"><Icon class="hot_icon" value='&#xe601;'></Icon></div>
        </div>
      </div>
      <div class="nav_item">博物馆</div>
      <div class="nav_item">古玩城</div>
      <div class="nav_item">业内资讯</div>
      <div class="nav_item">新闻资讯</div>
      <div class="nav_item">衍生服务</div>
      </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Navbar',
  components: {
    Icon,
  },
  data(){
    return {
      fixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop > 130){
        this.fixed = true
      }else{
        this.fixed = false
      }
    },
  }
}
</script>

<style scoped lang='scss'>
  .fixed{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .navbar{
    width: 100%;
    background: #fff;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.1);
    .container{
      height: 50px;
      display: flex;
      align-items: center;
      .nav_item{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 36px;
        font-size: 15px;
        width: 100px;
        margin-right: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.5s;
        position: relative;
        border-radius: 50px;
        color: #000;
        .icon{
          margin-right: 2px;
        }
        &::after{
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          bottom: -2px;
          transform: translateX(-50%); 
          width: 0;
          height: 2px;
          background: #8c222c;
          transition: all 0.5s;
        }
        &:hover{
          background: rgba(0,0,0,0.1);
          &::after{
            width: 60px;
          }
        }
        .container-exibition-text{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
        }

        .hot{
          font-size: 16px;position: absolute;
            right: 15px;
            bottom: 0px;

          .hot_icon{
            color: red;
            font-weight: normal;
            margin-left: 3px;
            
          }
        }
      }
      .active{
        background: #8c222c;
        color: #fff;
        &:hover{
          background: #8c222c;
          color: #fff;
          &::after{
            width: 0;
          }
        }
      }
    }
  }
  .text-center { text-align: center; }
  .text-left   { text-align: left;   }
  .text-right  { text-align: right;  }


  .style1 > div { animation-name: style1; }
  .style2 > div { animation-name: style2; }
  .style3 > div { animation-name: style3; }
  .style4 > div { animation-name: style4; }

  .is-animate > div {
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes style1 {
    from, 20%, 53%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transform: translate3d(0,0.5,0.1);
    }
    40%, 43% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0px, -20px, 0);
    }
  }

  @keyframes style2 {
    from {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      transform: scale3d(.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, .95, 1);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes style3 {
    from {
      transform: scale3d(1, 1, 1);
    }
    10%, 20% {
      transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }
    30%, 50%, 70%, 90% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }
    40%, 60%, 80% {
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }
    to {
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes style4 {
    from, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
        opacity: 0.5;
        transform: scale3d(.3, .3, .3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(.9, .9, .9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(.97, .97, .97);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
  }
</style>