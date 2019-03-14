<template>
  <div class="me">
    <h4>我的</h4>
    <!-- 点击登入 -->
    <ha></ha>
    <!-- 我的信息 -->
    <div class="message clearfix">
      <div>
        <router-link to="/me/myvip" tag="div">
          <img src="../../static/images/1183205.png" alt>
          <span>我的会员</span>
        </router-link>
        <router-link to="/me/order" tag="div">
          <img src="../../static/images/11183341.png" alt>
          <span>我的订单</span>
        </router-link>
        <router-link to="/me/help" tag="div">
          <img src="../../static/images/0311183623.png" alt>
          <span>帮助中心</span>
        </router-link>
      </div>
    </div>
    <!-- <div class="message-bottpm message clearfix">
      <div>
        <router-link to="/me/message" tag="div">
          <img src="../../static/images/message.png" alt>
          <span>我的信息</span>
        </router-link>
        <router-link to="/me/collection" tag="div">
          <img src="../../static/images/1183509.png" alt>
          <span>我的收藏</span>
        </router-link>
        <div>
          <img src="../../static/images/311184314.png" alt>
          <span class="wo-color">沃音乐俱乐</span>
          <span class="wo-color">部欢迎你</span>
        </div>
      </div>
    </div>-->
    <!-- 登录按钮 -->
    <router-link to="/me/login" tag="div" class="btn-l default wo-button">
      <span data-v-98f22982>登录</span>
    </router-link>
    <!-- 退出登录 -->
    <div class="modal openvip-modal" v-show="flag">
      <div class="img-show">
        <div class="txt">是否确认退出登录</div>

        <div class="clear-button confirm-btn defaults wo-buttons" @click="colse">
          <span>取消</span>
        </div>
        <div class="true-botton confirm-btn defaults wo-buttons">
          <span>确认</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import ha from "./leb/Ha";
export default {
  data: () => ({
    active: 1,
    flag: false
  }),
  methods: {
    colse() {
      this.flag = !this.flag;
    }
  },
  components: {
    ha
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
.me {
  padding: 0.1rem;
  > h4 {
    text-align: center;
  }
  > .message {
    position: relative;
    top: 0.2rem;
    > div {
      > div {
        height: 0.8rem;
        width: 30%;
        border-radius: 0.05rem;
        box-shadow: 0 0.02rem 0.01rem 0 rgba(0, 0, 0, 0.1);
        text-align: center;
        > img {
          display: inline-block;
          margin: 0.1rem 0 0.05rem 0;
        }
        > span {
          display: block;
          font-size: 0.13rem;
          color: #000;
          letter-spacing: 0;
          line-height: 0.18rem;
        }
        > .wo-color {
          color: #ad6bff;
        }
      }
      > div:nth-child(1) {
        float: left;
      }
      > div:nth-child(2) {
        position: absolute;
        // top: 50%;
        right: 50%;
        transform: translate(50%);
      }
      > div:nth-child(3) {
        float: right;
      }
    }
  }
  > .message-bottpm {
    margin-top: 0.2rem;
  }
  // 登录按钮
  .btn-l {
    margin-top: 0.7rem;
    text-align: center;
    height: 0.44rem;
    border-radius: 0.3rem;
    line-height: 0.44rem;
  }
  .wo-button.default {
    background-image: linear-gradient(-135deg, #74bcf7, #ad6bff);
    color: #fff;
  }

  //退出登录
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6) no-repeat;
    z-index: 999;
  }
  .img-show {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    width: 3rem;
    height: 2rem;
    margin: 0.4rem 0 0.1rem 0;
    z-index: 99;
    background: url("../../static/images/53ece9b.png");
    background-size: 100%;
    border-radius: 10px;
    > .txt {
      color: #000;
      margin-top: 0.8rem;
      text-align: center;
      padding: 18px 0;
      line-height: 24px;
      font-size: 17px;
      letter-spacing: 0;
    }
    .img-c {
      position: absolute;
      top: 0.75rem;
      right: 0.24rem;
      width: 0.2rem;
      height: 0.2rem;
    }
    > .true-botton {
      background-image: linear-gradient(-135deg, #74bcf7, #ad6bff);
      color: #fff;
    }
    > .wo-buttons.defaults {
      height: 0.33rem;
      line-height: 0.33rem;
      border-radius: 1rem;
      padding: 0 0.15rem;
      font-size: 0.12rem;
      overflow: hidden;
      text-align: center;
      width: 15%;
      float: left;
      margin-left: 50px;
    }
    > .clear-button {
      border: 1px solid #746bff;
      color: #746bff;
    }
  }
}
</style>