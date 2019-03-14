<template>
  <div id="app">
    <router-view/>
    <div class="tab-w" v-show="$route.meta.showFooter">
      <van-tabbar v-model="active" color="#ad6bff">
        <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="smile-o" to="/me">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    active: 0,
  }),

  methods: {}
};
</script>

<style lang="less">
#app {
  padding-bottom: 0.5rem;
  .van-tabbar-item {
    position: relative;
    > .van-tabbar-item__icon {
      position: absolute;
      top: 0.17rem;
      left: 0.62rem;
    }
  }
  .van-tabbar-item__text {
    position: absolute;
    top: 0.2rem;
    left: 0.85rem;
  }
  .van-tabbar-item--active {
    color: #ad6bff;
  }
  .tab-w {
    max-width: 750px;
    min-width: 375px;
    margin: 0 auto;
    > .van-tabbar {
      margin: 0 auto;
    }
  }
}
</style>
