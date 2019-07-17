<template>
  <div class="title">
    <img v-if="src" :src="src" alt="logo">
    <span>{{title}}</span>
  </div>
</template>
<script>
  // import Logo from '@/assets/images/logo.png'
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      src: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 30px;
    line-height: 80px;
    height: 80px;
    box-sizing: border-box;

    img {
      height: 60px;
      margin-right: 20px;
    }

    span {
      font-size: 32px;
    }
  }
</style>