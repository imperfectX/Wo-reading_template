<template>
  <div class="order">
    <!-- 头部 -->
    <van-nav-bar
      title="帮助中心"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />

    <div class="tab clearfix">
      <div @click="tabClick" class="center" :class="flag?'active-center':''">
        <div>领取
          <van-icon :class="flag?'active':''" name="arrow-down"/>
        </div>
        <div v-show="flag" class="v-1">
          <div>
            <div class="font-center-one">您还没有领取记录
              <br>
              <router-link to="/home/receive" class="a-opening">马上开通会员领取吧！</router-link>
            </div>
          </div>
        </div>
      </div>
      <div @click="tabsClick" class="center" :class="fl?'active-center':''">
        <div>购买
          <van-icon :class="fl?'active':''" name="arrow-down"/>
        </div>
        <div v-show="fl" class="v-2">
          <div>
            <div class="font-center-one">您还没有购买记录
              <br>
              <router-link to class="a-opening">马上开启折扣购吧！</router-link>
            </div>
          </div>
        </div>
      </div>
      <div @click="tabsClicks" class="center" :class="ag?'active-center':''">
        <div class="border-r">兑换
          <van-icon :class="ag?'active':''" name="arrow-down"/>
        </div>
        <div v-show="ag" class="v-3">
          <div>
            <div class="font-center-one">您还没有兑换记录
              <br>
              <router-link to class="a-opening">马上前往兑换吧！</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    flag: true,
    fl: false,
    ag: false
  }),
  methods: {
    onClickLeft() {
      history.back();
    },
    tabClick() {
      this.flag = true;
      this.fl = false;
      this.ag = false;
    },
    tabsClick() {
      this.fl = true;
      this.flag = false;
      this.ag = false;
    },
    tabsClicks() {
      this.ag = true;
      this.fl = false;
      this.flag = false;
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
.active {
  color: black;
  transition: all 0.5s;
  transform: rotateZ(180deg);
}
.active-center {
  color: black;
}
.order {
  .van-icon-arrow-left {
    padding: 0 0.2rem;
  }
  // 头部
  > .van-nav-bar {
    background-color: #fff;
    .van-nav-bar__left {
      .van-icon {
        color: black;
        font-weight: 700;
        position: relative;
        left: -0.2rem;
      }
    }
    > .van-nav-bar__title {
      font-weight: 700;
    }
  }
  .tab {
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    position: relative;
    color: #7e8c8d;
    > .center {
      width: 33.3333%;
      height: 0.5rem;
      float: left;
      line-height: 0.5rem;
      position: relative;
      > div:nth-child(1) {
        text-align: center;
      }
      > div:nth-child(1)::after {
        content: "";
        height: 0.2rem;
        border-right: 0.005rem solid #ddeedd;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      > .border-r::after {
        display: none;
      }
      .van-icon {
        position: relative;
        top: 0.03rem;
        font-weight: 700;
      }
      > .v-1 {
        height: 5rem;
        width: 300%;
        position: relative;
        right: 0;
      }
      > .v-2 {
        height: 5rem;
        width: 300%;
        position: relative;
        left: 50%;
        transform: translate(-50%);
      }
      > .v-3 {
        height: 5rem;
        width: 300%;
        position: relative;
        right: 50%;
        transform: translate(-50%);
      }
    }
  }
  .font-center-one {
    text-align: center;
    width: 100%;
    line-height: 0.2rem;
    font-size: 0.14rem;
    padding-top: 2.2rem;
    > .a-opening {
      color: #7e8c8d;
      -webkit-backface-visibility: hidden;
      text-decoration: none;
    }
  }
}
</style>