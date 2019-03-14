<template>
  <div class="logins">
    <van-icon @click="gos" class="go" name="arrow-left"/>
    <div class="title-white">WO MUSIC</div>
    <div class="title-black">WO MUSIC</div>

    <div class="login-wrapper">
      <div class="wo-img">
        <img src="../../../static/images/311192227.png" alt>
      </div>
      <div class="input-container">
        <input type="text" placeholder="手机号码" v-model="number">
      </div>
      <div class="input-huo input-container">
        <input type="text" placeholder>
        <span @click="phone" v-if="flag">获取验证码</span>
        <span v-else>{{count}}s</span>
      </div>
      <!-- 登录按钮 -->
      <div class="btn-l default wo-button">
        <span data-v-98f22982>登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data: () => ({
    number: "",
    count: 60,
    flag: true
  }),
  created() {
    this.test();
  },
  methods: {
    gos() {
      history.go(-1);
    },
    // 验证手机号
    phone() {
      if (!/^1[34578]\d{9}$/.test(parseInt(this.number))) {
        Toast("请输入正确的手机号码");
        return false;
      }
      Toast("发送成功");
      this.flag = !this.flag;
      // 倒计时
      this.timer = setInterval(() => {
        this.count--;
        if (this.count <= 0) {
          clearInterval(this.timer);
          this.flag = true;
          this.count = 60;
        }
      }, 1000);
    },
    async test() {
      const res = await this.$http.post(
        "https://ynuf.aliapp.org/service/um.json"
      );
      console.log(res);
    }
  }
};
</script>

<style lang="less">
// 清除浮动
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.logins {
  overflow: hidden;
  padding: 0 0.15rem;
  background-image: linear-gradient(-135deg, #ad6bff, #74bcf7);
  font-size: 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > .go {
    font-size: 0.25rem;
    color: white;
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
  }
  .title-white {
    font-size: 0.5rem;
    color: #fff;
    position: relative;
    top: 0.3rem;
    left: 0.17rem;
  }
  .title-black {
    font-size: 0.5rem;
    color: rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0.15rem;
    left: 1.64rem;
  }
  //   登录
  .login-wrapper {
    margin: 0.2rem 0;
    height: 3.43rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.1rem;
    > .wo-img {
      padding-top: 0.5rem;
      img {
        margin: 0 auto;
        display: block;
      }
    }
    .input-container {
      position: relative;
      top: 0.3rem;
      text-align: left;
      font-size: 0.18rem;
      height: 0.4rem;
      width: 3rem;
      margin: 0 auto;
      padding: 0 0.15rem;
      background-color: wheat;
      border-radius: 0.3rem;
      > input {
        position: absolute;
        border: none;
        height: 96%;
        width: 80%;
        background-color: wheat;
        border-radius: 0.3rem;
      }
    }
    .input-huo {
      margin-top: 0.3rem;
      input {
        position: relative;
      }
      > span {
        font-size: 0.14rem;
        line-height: 0.4rem;
        position: absolute;
        top: 0;
        right: 0.2rem;
        color: #ad6bff;
      }
    }
    // 登录按钮
    .btn-l {
      position: relative;
      top: 0.5rem;
      text-align: center;
      height: 0.44rem;
      border-radius: 0.3rem;
      line-height: 0.44rem;
      margin: 0 0.1rem;
    }
    .wo-button.default {
      background-image: linear-gradient(-135deg, #74bcf7, #ad6bff);
      color: #fff;
    }
  }
}
</style>