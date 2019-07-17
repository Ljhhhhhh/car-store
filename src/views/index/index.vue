<template>
  <div class="container">
    <Title title="云南滇盟汽车销售服务有限公司" :src="Logo" />
    <div class="swiper-wrapper">
      <Swipe indicator-color="#8ed9ff">
        <SwipeItem><img :src="swipeImg" alt="swipe"></SwipeItem>
        <SwipeItem><img :src="swipeImg" alt="swipe"></SwipeItem>
        <SwipeItem><img :src="swipeImg" alt="swipe"></SwipeItem>
        <SwipeItem><img :src="swipeImg" alt="swipe"></SwipeItem>
      </Swipe>
    </div>
    <div class="cate-title">
      <span>主营品牌</span>
    </div>
    <div class="brand-list">
      <router-link :to="brand.link" class="brand-item" v-for="(brand) in brandList" :key="brand.brand">
        <img :src="brand.icon" alt="brank">
        <span>{{brand.brand}}</span>
      </router-link>
    </div>
    <div class="cate-title">
      <span>所有车型</span>
    </div>
    <div class="car-list">
      <router-link :to="'/?id=' + car.id" class="car" v-for="(car) in carList" :key="car.id">
        <div class="slide"><van-image lazy-load :src="car.thumb" alt="thumb" /></div>
        <div class="content">
          <div class="car-name">{{car.name}}</div>
          <div class="car-color">{{car.color}}</div>
          <div class="car-price">￥{{car.price}}万</div>
          <div class="car-guide_pirce">指导价：{{car.guidePrice}}万</div>
          <div class="car-tags">
            <span v-for="(tag) in car.tags" :key="tag">{{tag}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import defaultRectPng from '@/assets/images/default_rect.png'
  import defaultCarPng from '@/assets/images/default.png'
  import Logo from '@/assets/images/logo.png'
  import Title from './components/title'
  import {
    Swipe,
    SwipeItem,
    Image
  } from 'vant';
  export default {
    data() {
      return {
        swipeImg: defaultRectPng,
        Logo,
        brandList: [{
            brand: '大众',
            icon: Logo,
            link: '/'
          },
          {
            brand: '宝马',
            icon: Logo,
            link: '/'
          },
          {
            brand: '比亚迪',
            icon: Logo,
            link: '/'
          },
          {
            brand: '奔驰',
            icon: Logo,
            link: '/'
          },
          {
            brand: '全部',
            icon: require('@/assets/images/more.png'),
            link: '/'
          },
        ],
        carList: [
          {
            id: 1,
            thumb: defaultCarPng,
            name: '别克 英朗 2019 15T 手动舒适版',
            color: '外白内黑',
            price: 19.85,
            guidePrice: 20.99,
            tags: ['现货', '到店付款', '货到付款']
          },
          {
            id: 2,
            thumb: defaultCarPng,
            name: '别克 英朗 2019 15T 手动舒适版',
            color: '外白内黑',
            price: 19.85,
            guidePrice: 20.99,
            tags: ['现货', '到店付款', '货到付款']
          },
          {
            id: 3,
            thumb: defaultCarPng,
            name: '别克 英朗 2019 15T 手动舒适版',
            color: '外白内黑',
            price: 19.85,
            guidePrice: 20.99,
            tags: ['现货', '到店付款', '货到付款']
          },
          {
            id: 4,
            thumb: defaultCarPng,
            name: '别克 英朗 2019 15T 手动舒适版',
            color: '外白内黑',
            price: 19.85,
            guidePrice: 20.99,
            tags: ['现货', '到店付款', '货到付款']
          },
          {
            id: 5,
            thumb: defaultCarPng,
            name: '别克 英朗 2019 15T 手动舒适版',
            color: '外白内黑',
            price: 19.85,
            guidePrice: 20.99,
            tags: ['现货', '到店付款', '货到付款']
          }
        ]
      }
    },
    components: {
      Swipe,
      SwipeItem,
      'van-image': Image,
      Title
    }
  }
</script>
<style lang="scss" scoped>
  @import './common.scss';

  .swiper-wrapper {
    img {
      width: 100%;
      height: auto;
    }
  }

  .cate-title {
    text-align: center;
    position: relative;
    width: auto;
    margin: 50px 30px 30px;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0;
      border-top: 2px dashed #8ed9ff;
      left: 0;
      top: 50%;
      z-index: 0;
      transform: translateY(-50%);
    }

    span {
      color: #8ed9ff;
      background: #FFF;
      display: inline-block;
      padding: 0 20px;
      transform: translateZ(1px);
    }
  }

  .brand-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    border-bottom: 10px solid #f2f2f2;
    margin-bottom: 20px;

    .brand-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 10px;
      }

      span {
        font-size: 28px;
        color: #333;
      }
    }
  }
  .car-list{
    width: auto;
    height: auto;
    margin: 0 30px;
    box-sizing: border-box;
    box-shadow: -10px 20px 20px #F2F2F2;
    .car{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 10px solid #F2F2F2;
      height: auto;
      padding: 20px 0;
      border-top: 2px solid #f2f2ff;
      .slide{
        min-width: 240px;
        max-width: 240px;
        height: auto;
        img{
          width: 100%;
        }
      }
      .content{
        width: 450px;
        margin-left: 20px;
        div{
          line-height: 50px;
        }
        .car-name{
        font-size: 32px;
        color: #000;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .car-color{
        font-size: 24px;
        color: #999;
      }
      .car-price{
        font-size: 28px;
        color: #66ccff
      }
      .car-guide_pirce{
        color: #999;
        font-size: 20px;
      }
      .car-tags{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span{
          display: inline-block;
          border-radius: 5px;
          background: #ccc;
          line-height: 50px;
          font-size: 22px;
          color: #FFF;
          margin-right: 10px;
          padding: 0 10px;
        }
      }
      }
    }
  }
</style>