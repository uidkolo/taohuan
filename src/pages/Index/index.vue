<template>
  <div class="index">
    <div class="banner_box">
      <div class="container">
        <div class="left">
          <Classify></Classify>
        </div>
        <div class="center">
          <div class="top">
            <el-carousel height="230px" loop>
              <el-carousel-item>
                <el-image src="https://images.jianloubao.com/2019/11/14/21/HXGoods/14437064_1573739478213387_w1368_h460.jpg"></el-image>
              </el-carousel-item>
              <el-carousel-item>
                <el-image src="https://images.jianloubao.com/2019/11/14/22/HXGoods/13737755_1573740115436883_w1368_h460.jpg"></el-image>
              </el-carousel-item>
              <el-carousel-item>
                <el-image src="https://images.jianloubao.com/2019/11/15/09/HXGoods/15_1573780749453329_w1368_h460.jpg"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="bottom">
            <div class="item">
              <img src="@/assets/special01.jpg">
            </div>
            <div class="item">
              <img src="@/assets/special02.jpg">
            </div>
            <div class="item">
              <img src="@/assets/special03.jpg">
            </div>
          </div>
        </div>  
        <div class="right">
          <UserPlate></UserPlate>
          <Auction class="auction"></Auction>
        </div>
      </div>
    </div>
    <!-- 精美展示 -->
    <div class="recommend">
      <div class="container">
        <ModuleTitle tier='1' :next="true" title='精美展示' :more='true'></ModuleTitle>
        <div class="list">
          <ProductItem class="item" v-for="(item, index) in productList" :key='index' :info='item'></ProductItem>
        </div>
      </div>
    </div>
    <!-- 古玩城/博物馆 -->
    <div class="store">
      <div class="container">
        <ModuleTitle tier='2' :tab="storeTab" title='黄页' :more='true'></ModuleTitle>
        <div class="list">
          <InfoItem class="item" v-for="(item, index) in InfoList" :key='index' :info='item'></InfoItem>
        </div>
      </div>
    </div>
    <!-- 资讯 -->
    <div class="article">
      <div class="container">
        <ModuleTitle tier='3' :tab="articleTab" title='资讯'></ModuleTitle>
        <div class="list">
          <ArticleModule class="item" v-for="(item, index) in articleList" :key='index' :info='item'></ArticleModule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import LogoBox from '@/components/LogoBox'
import NavBar from '@/components/NavBar'
import Classify from '@/components/Classify'
import UserPlate from '@/components/UserPlate'
import Auction from '@/components/Auction'
import ModuleTitle from '@/components/ModuleTitle'
import Icon from '@/components/Icon'
import ProductItem from '@/components/ProductItem'
import InfoItem from '@/components/InfoItem'
import ArticleModule from '@/components/ArticleModule'
import Footer from '@/components/Footer'
import Suspend from '@/components/Suspend'
export default {
  name: 'Index',
  components: {
    NavHeader,
    LogoBox,
    NavBar,
    Classify,
    UserPlate,
    Auction,
    ModuleTitle,
    Icon,
    ProductItem,
    InfoItem,
    ArticleModule,
    Footer,
    Suspend
  },
  data(){
    return {
      articleTab: ['业内资讯', '新闻资讯'],
      articleList: [
        {
          moduleName: '专业探讨',
          img: 'https://images.jianloubao.com/2019/11/08/08/Goods/0_1573173663003781_w1512_h1512.png!rect_w300'
        },
        {
          moduleName: '淘换经验',
          img: 'https://images.jianloubao.com/2019/06/06/21/Goods/0_1559828573377066_w1560_h2080.png!rect_w300'
        },
        {
          moduleName: '收藏故事',
          img: 'https://images.jianloubao.com/2019/11/05/01/HXGoods/435229_1572887084241829_w1080_h1080.jpg!rect_w300'
        },
        {
          moduleName: '鉴赏鉴别',
          img: 'https://imgshop.cang.com/201607/08/20160708132652bfvzh65o522xv7m4.jpg!s300'
        }
      ],
      storeTab: ['博物馆', '古玩城'],
      InfoList: [
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/183055331.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/183255871.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/183414991.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/181326361.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/183506891.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/181220411.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/183605401.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/30/180952251.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/27/114147141.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        },
        {
          img: 'http://www.wwlm.cn/file/upload/201608/31/111222981.jpg',
          name: '上海博物馆',
          address: '上海市黄浦区人民大道201号',
          phone: '021-63723500'
        }
      ],
      productList: [
        {
          img: 'https://imgtrade.cang.com/201611/03/201611030258547tnc8borbe0jxzbq.jpg!s300',
          type: 0,
          title: '同治粉彩兽纹花卉盘',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://imgtrade.cang.com/201903/19/20190319090054dnjzd4fizi1i0dzl.jpg!s300',
          type: 0,
          title: '晚清墨彩山水壶',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://images.jianloubao.com/2019/11/02/12/Goods/0_1572670148315974_w1124_h1124.png!rect_w300',
          type: 0,
          title: '【官方放漏】天然原矿大颗粒巴西彩发晶单圈手串',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://imgtrade.cang.com/201802/03/20180203123144geeseyqmlzvcn2x3.jpg!s300',
          type: 0,
          title: '民国浅绛彩将军罐',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://images.jianloubao.com/2019/11/02/12/Goods/0_1572670334065937_w1124_h1124.png!rect_w300',
          type: 0,
          title: '【官方放漏】天然原矿收藏级乌拉圭紫水晶单圈手串',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://img8.cang.com/201303/21/2013032114320926538327.JPG!s300',
          type: 1,
          title: '光绪粉彩大雅斋风格双龙穿花画缸',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://imgshop.cang.com/201505/25/2015052512125572836889.jpg!s300',
          type: 1,
          title: '昌化田黄山水人物石道人款印章',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://images.jianloubao.com/2019/07/09/13/Goods/0_1562648511752035_w1488_h1984.png!rect_w300',
          type: 1,
          title: '民国描金执壶',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://imgtrade.cang.com/201903/25/20190325111812apf08xe990lgf95c.jpeg!s300',
          type: 1,
          title: '清代同治粉彩人物水盂',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        },
        {
          img: 'https://images.jianloubao.com/2019/11/06/15/Goods/0_1573025805259823_w1728_h2304.png!rect_w300',
          type: 1,
          title: '乾隆柳下双骏',
          avator: '@/assets/logo_default.png',
          name: '小淘气',
          view: 520,
          collect: 20
        }
      ],
      messageList: ['收藏问答', '淘换经验', '收藏故事', '鉴赏鉴别'],
    }
  }
}
</script>

<style scoped lang='scss'>
.index{
  .banner_box{
    margin-top: 10px;
    .container{
      display: flex;
      .left{
        width: 200px;
        flex-shrink: 0;
      }
      .center{
        flex-grow: 1;
        width: 700px;
        margin: 0 10px;
        .bottom{
          display: flex;
          margin-top: 10px;
          justify-content: space-between;
          .item{
            height: 120px;
            width: 230px;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-image{
              height: 120px;
              width: 230px;
            }
          }
        }
      }
      .right{
        width: 300px;
        flex-shrink: 0;
        .auction{
          margin-top: 10px;
        }
      }
    }
  }
  .recommend, .store, .article{
    margin-top: 30px;
    .list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>