<template>
  <div class="article_module">
    <div class="head">
      <span class="label">{{info.moduleName}}</span>
      <div class="more">
        <span>查看更多</span>
        <Icon class="icon" value="&#xe68a;" size='12'></Icon>
      </div>
    </div>
    <div class="module">
      <div class="top">
        <div class="img">
          <img :src="info.img" alt="">
        </div>
        <div class="content">
          <div class="title">童心墨韵”2017年成都青少年诗词书法作品展在成都杜甫草堂博物馆开幕</div>
          <div class="detail">2017年6月1日下午，由成都市关心下一代工作委员会、成都市青少年宫、成都杜甫草堂博物馆、成都市书法家协会共同举办的“‘童心墨韵’2017年成都青少年诗词书法作品展”在成都杜甫草堂博物馆正式开幕。成都市关工委宣传与教育专委会副主任薛建明、办公室主任屈妮娜，四川省书协副主席戴跃、舒炯、郭强、洪厚甜、何开鑫、钟显金、林峤，四川省文化馆书记吕骑骅，成都市青少年宫办公室主任杨加军，成都杜甫草堂博物馆馆长刘洪等嘉宾出席了开幕式。</div>
          <div class="info">
            <div class="author">
              <span class="avator">
                <img src="@/assets/logo_default.png" />
              </span>
              <span class="name">小淘气</span>
            </div>
            <div class="num">
              <div class="num_item">
                <Icon value="&#xe65b;"></Icon>
                <span>20</span>
              </div>
              <div class="num_item">
                <Icon class="icon" value="&#xe607;"></Icon>
                <span>20</span>
              </div>
              <div class="num_item">
                <Icon class="icon" value="&#xe65c;"></Icon>
                <span>2019-01-21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <span class="title">童心墨韵”2017年成都青少年诗词书法作品展在成都杜甫草堂博物馆开幕</span>
        <span class="date">2019-12-11</span>
      </div>
      <div class="item">
        <span class="title">童心墨韵”2017年成都青少年诗词书法作品展在成都杜甫草堂博物馆开幕</span>
        <span class="date">2019-12-11</span>
      </div>
      <div class="item">
        <span class="title">童心墨韵”2017年成都青少年诗词书法作品展在成都杜甫草堂博物馆开幕</span>
        <span class="date">2019-12-11</span>
      </div>
      <div class="item">
        <span class="title">童心墨韵”2017年成都青少年诗词书法作品展在成都杜甫草堂博物馆开幕</span>
        <span class="date">2019-12-11</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'ArticleModule',
  components: {
    Icon,
  },
  props: ['info']
}
</script>

<style lang="scss" scoped>
  .article_module{
    width: 595px;
    margin-top: 10px;
    background: #fff;
    padding: 20px;
    &:hover{
      box-shadow: 0 3px 4px 0 rgba(0,0,0,.1);
    }
    .head{
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      .label{
        background: #8c222c;
        color: #fff;
        height: 24px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
    .module{
      margin-top: 10px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
      .top{
        display: flex;
        .img{
          width: 125px;
          height: 125px;
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
          &:hover{
            img{
              transform: scale(1.2);
            }
          }
          img{
            transform: scale(1.0);
            width: 125px;
            height: 125px;
            transition: all 0.5s;
          }
        }
        .content{
          padding: 0 10px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .title{
            width: 420px;
            line-height: 30px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
            color: #000;
            cursor: pointer;
            &:hover{
              color: #8c222c;
            }
          }
          .detail{
            text-align: justify;
            display: block;
            display: -webkit-box;
            max-width: 420px;
            height: 60px;
            font-size: 12px;
            line-height: 20px;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #999;
            text-indent: 24px;
          }
          .info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            .author{
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
            .num{
              display: flex;
              align-items: center;
              color: #999;
              .num_item {
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
      }
    }
    .list{
      margin-top: 5px;
      .item{
        &:hover{
          .title{
            color: #8c222c;
          }
        }
        cursor: pointer;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        .title{
          width: 400px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #666;
        }
      }
    }
  }
</style>