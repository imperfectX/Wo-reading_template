<template>
  <div class="ha">
    <!-- 点击登入 -->
    <router-link to="/me/login" tag="div" class="login">
      <!-- 头像 -->
      <div class="head">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2502073311,3044549660&fm=27&gp=0.jpg"
          alt
        >
      </div>
      <!-- 登录文字 -->
      <div class="font-login">
        <span>点击登录</span>
        <span>每月热门权益VIP等着你</span>
      </div>
      <div class="font-opening">开通会员开启省钱模式~</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="less">
.ha {
  // 登录
  > .login {
    margin-top: 0.2rem;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    height: 1rem;
    width: 100%;
    border-radius: 0.05rem;
    padding: 0 0.4rem;
    box-sizing: border-box;
    background-color: #fff;
    > .head {
      float: left;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 0.1rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > .font-login {
      padding: 0.1rem 0.1rem 0 0.5rem;
      > span {
        display: block;
      }
      > span:nth-child(2) {
        color: #999;
        font-size: 0.14rem;
      }
    }
    > .font-opening {
      font-size: 0.14rem;
      color: #ad6bff;
      margin-top: 0.07rem;
    }
  }
}
</style>