<template>
  <div class="opening clearfix">
    <van-icon @click="gos" class="go" name="arrow-left"/>
    <img src="../../../static/images/c3780e8.jpg" width="100%" alt>
    <div class="modal openvip-modal" v-show="flag">
      <div class="img-show">
        <img src="../../../static/images/7f7e535.png" class="img-c" @click="close" alt>
        <div class="txt">选择支付方式</div>
        <van-radio-group v-model="radio">
          <van-radio name="1">
            <div class="box-img">
              <img src="../../../static/images/3222997.jpg" class="i-img" alt>
              <span>联通话费支付</span>
            </div>
          </van-radio>
          <van-radio name="2">
            <div class="box-img">
              <img src="../../../static/images/21081e2.jpg" class="i-img" alt>
              <span>微信支付</span>
            </div>
          </van-radio>
        </van-radio-group>
        <div class="confirm-btn default wo-button">
          <span>确认</span>
        </div>
      </div>
    </div>
    <div class="btn-box container flex-row">
      <div class="flex-1 btn" @click="showOne">
        开通黄金会员
        <span style="font-size:10px;margin-left:5px;">￥10元/月</span>
      </div>
      <div class="flex-1 btn btn2" @click="showOne">
        开通铂金会员
        <span style="font-size:10px;margin-left:5px;">￥15元/月</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    flag: false,
    radio: "1"
  }),
  methods: {
    close() {
      this.flag = !this.flag;
    },
    showOne() {
      this.flag = !this.flag;
    },
    gos(){
      history.go(-1);
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
.opening {
  > .go {
    font-size: 0.25rem;
    color: #999;
    position: fixed;
    top: 0.1rem;
    left: 0.1rem;
  }
  img {
    display: block;
  }
  > .btn-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 0.5rem;
    text-align: center;
    z-index: 99;
    > div {
      float: left;
      width: 50%;
      background: linear-gradient(180deg, #7c7c7c, #444);
      height: 0.5rem;
      line-height: 0.5rem;
      color: #fff;
      font-size: 0.15rem;
    }
    > div:hover {
      opacity: 0.5;
    }
    > div:nth-child(2) {
      background: linear-gradient(180deg, #d1c0a5, #a6937c);
    }
  }
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
    transform: translate(-50%, -60%);
    width: 3rem;
    height: 3rem;
    margin: 0.4rem 0 0.1rem 0;
    z-index: 99;
    background: url("../../../static/images/53ece9b.png");
    background-size: 100%;
    .img-c {
      position: absolute;
      top: 0.75rem;
      right: 0.24rem;
      width: 0.2rem;
      height: 0.2rem;
    }
    > .txt {
      font-size: 0.16rem;
      color: #000;
      line-height: 0.2rem;
      margin-top: 0.8rem;
      text-align: center;
    }
    .van-radio {
      margin: 0.2rem 0 0 0.6rem;
    }
    .van-radio__input {
    }
    .box-img {
      .i-img {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.1rem;
        border-radius: 0.05rem;
        margin-left: 0.05rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.14rem;
      }
    }
    > .wo-button.default {
      background-image: linear-gradient(-135deg, #74bcf7, #ad6bff);
      color: #fff;
      height: 0.33rem;
      line-height: 0.33rem;
      border-radius: 1rem;
      padding: 0 0.15rem;
      font-size: 0.12rem;
      overflow: hidden;
      text-align: center;
      margin: 0.3rem 0.5rem;
    }
  }
}
</style>