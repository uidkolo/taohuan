<template>
  <div class="index">
    <NavHeader></NavHeader>
    <LogoBox></LogoBox>
    <NavBar></NavBar>
    <router-view></router-view>
    <!-- 悬浮栏 -->
    <Suspend></Suspend>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import LogoBox from '@/components/LogoBox'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Suspend from '@/components/Suspend'
export default {
  name: 'Index',
  components: {
    NavHeader,
    LogoBox,
    NavBar,
    Footer,
    Suspend
  }
}
</script>