<template>
  <div class="slogan is-animate">
    <div class="container-exibition-text is-animate text-center style1" v-for="(item, index) in slogan" :key="index">
      <div class="item" :style="{animationDelay: `${index/10}s` }" v-if="item!==' '">{{item}}</div>
      <span class="blank" v-else></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slogan',
  data(){
    return {
      slogan: '淘旧物 换新藏'
    }
  }
}
</script>

<style lang="scss" scoped>
.slogan{
  display: flex;
  align-items: center;
  color: #8c222c;
  position: relative;
  top: 20px;
  .item{
    width: 30px;
    height: 30px;
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    background: #8c222c;
    border-radius: 30px;
    color: #fff;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blank{
    display: block;
    width: 10px;
  }
}

// .slogan{
//   display: flex;
//   align-items: center;
//   color: #8c222c;
//   position: relative;
//   top: 20px;
//   .item{
//     width: 36px;
//     height: 36px;
//     background: #8c222c;
//     border-radius: 30px;
//     color: #8c222c;
//     margin-right: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     .text_box{
//       transform: rotate(45deg);
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 12px;
//       font-weight: bold;
//       width: 16px;
//       height: 16px;
//       background: #fff;
//       line-height: 12px;
//       .text{
//         transform: rotate(-45deg);
//       }
//     }
//   }
//   .blank{
//     display: block;
//     width: 10px;
//   }
// }

/*defaults*/

.text-center { text-align: center; }
.text-left   { text-align: left;   }
.text-right  { text-align: right;  }


.style1 > div { animation-name: style1; }
.style2 > div { animation-name: style2; }
.style3 > div { animation-name: style3; }
.style4 > div { animation-name: style4; }

.is-animate > div {
  animation-duration: 2s;
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
    transform: translate3d(0px, -35px, 0);
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
      opacity: 0;
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