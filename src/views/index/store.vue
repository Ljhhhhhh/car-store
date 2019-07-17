<template>
<div class="container">
  <Title title="云南滇盟汽车销售服务有限公司" :src="Logo" />
  <div class="sub-title">
    <icon name="compass" scale="2" color="#ff6632" />
    <span>云南省大理白族自治州祥云县清红路297附近</span>
  </div>
  <div class="article">
    <div class="article-title">门店信息</div>
    <div class="article-content store-info">
      <img :src="license" alt="license">
    </div>
  </div>
  <div class="article">
    <div class="article-title">销售顾问</div>
    <div class="article-content consultant-wrap">
      <div class="consultant" v-for="(consultant) in consultantList" :key="consultant.id">
        <div class="consultant-info">
          <img class="consultant-avatar" :src="consultant.avatar" alt="user avatar" />
          <div class="consultant-name">{{consultant.name}}</div>
        </div>
        <router-link :to="'/consultant?id=' + consultant.id">联系他</router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Title from './components/title';
import Logo from '@/assets/images/logo.png'
import Avatar from '@/assets/images/avatar_default.png'

export default {
  data() {
    return {
      Logo,
      license: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=29d277cd0323dd542173a06ee932d4e3/562c11dfa9ec8a1381e65c49fd03918fa1ecc09f.jpg',
      consultantList: [
        {
          id: 1,
          name: '仓叔',
          avatar: Avatar
        },
        {
          id: 2,
          name: '张建兴',
          avatar: Avatar
        },
        {
          id: 3,
          name: '卢洁辉',
          avatar: Avatar
        }
      ]
    }
  },
  components: {
    Title
  }
}
</script>
<style lang="scss" scoped>
  @import './common.scss';
  .sub-title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #333;
    font-size: 24px;
    padding: 0 50px;
    margin-top: 10px;
    span{
      margin-left: 14px;
    }
  }
  .article{
    border-top: 10px solid #f2f2f2;
    width: auto;
    height: auto;
    padding: 20px 30px;
    margin-top: 30px;
    &-title{
      font-size: 28px;
      color: #000;
      position: relative;
      padding-left: 16px;
      line-height: 40px;
      font-weight: 700;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 20px;
        width: 6px;
        background: #8ed9ff;
      }
    }
    &-content{
      margin-top: 40px;
      width: auto;
      height: auto;
    }
  }
  .store-info{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 60%;
      height: auto;
    }
  }
  .consultant-wrap{
    width: auto;
    height: auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .consultant{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      &-info{
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .consultant-avatar{
          height: 74px;
          width: 74px;
          border-radius: 50%;
          margin-right: 30px;
        }
        .consultant-name{
          font-size: 28px;
        }
      }
      a{
        display: inline-block;
        width: auto;
        height: 50px;
        line-height: 50px;
        background: #8ed9ff;
        color: #FFF;
        border-radius: 8px;
        padding: 0 16px;
      }
    }
  }
</style>