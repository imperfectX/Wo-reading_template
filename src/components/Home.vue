<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="swipe-img">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-img">
      </van-swipe-item>
    </van-swipe>
    <!-- 点击登入 -->
    
    <ha></ha>


    <!-- 质询 -->
    <!-- <vuescroll :ops="ops">
      <div>
        <router-link to="/home/receive" tag="div">
          <img src="../../static/images/10001.png" alt>
          <span>领特权</span>
        </router-link>
        <router-link to="/me/opening" tag="div">
          <img src="../../static/images/10002.png" alt>
          <span>开会员</span>
        </router-link>
        <div>
          <img src="../../static/images/10003.png" alt>
          <span>推荐</span>
        </div>
        <div>
          <img src="../../static/images/10004.png" alt>
          <span>兑换</span>
        </div>
        <div>
          <img src="../../static/images/10005.png" alt>
          <span>服务</span>
        </div>
      </div>
    </vuescroll>-->

    <!-- logo -->
    <div class="logo">
      <img src="../../static/images/logo.png" alt>
    </div>
    <!-- 广告轮播图 -->
    <!-- <van-swipe :autoplay="3000" class="swipe-advertisement" :show-indicators="false">
      <van-swipe-item v-for="(image, index) in guang" :key="index">
        <img :src="image" class="swipe-img">
      </van-swipe-item>
    </van-swipe> -->
    <!-- 会员领取 -->
    <div class="font-vip clearfix">
      <div class="font-left">会员领取</div>
      <router-link to="/home/class" tag="div" class="font-right">查看全部</router-link>
    </div>
    <div class="box-vip clearfix">
      <router-link to="/me/Opening" tag="div">
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </router-link>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版(1个月)</p>
        <p></p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
    </div>
    <!-- 精选铃声 -->
    <!-- <div class="font-vip clearfix">
      <div class="font-left">精选铃声</div>
      <div class="font-right">查看全部</div>
    </div>-->
    <!-- 铃声轮播图 -->
    <!-- <van-swipe :autoplay="3000" class="swipe-advertisement swipe-ring">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swipe-img">
      </van-swipe-item>
    </van-swipe>-->
    <!-- 铃声 -->
    <!-- <div class="ring">
      <div>
        <div class="font-number">
          <span>1</span>
        </div>
        <div class="song">
          <span>唱得响亮</span>
          <span>安又琪</span>
        </div>
        <div class="ico-play">
          <van-icon name="play"/>
          <van-icon name="bell"/>
        </div>
      </div>
      <div>
        <div class="font-number">
          <span>1</span>
        </div>
        <div class="song">
          <span>唱得响亮</span>
          <span>安又琪</span>
        </div>
        <div class="ico-play">
          <van-icon name="play"/>
          <van-icon name="bell"/>
        </div>
      </div>
    </div>-->
    <!-- 会员折扣 -->
    <!-- <div class="font-zhe font-vip clearfix">
      <div class="font-left">会员折扣</div>
      <div class="font-right">查看全部</div>
    </div>
    <div class="box-zhe box-vip clearfix">
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
      <div>
        <img src="http://img4.imgtn.bdimg.com/it/u=2081075711,2640040671&fm=26&gp=0.jpg" alt>
        <p class="child-p">QQ音乐绿钻豪华版</p>
        <p>(1个月)</p>
        <p>市场价：15元</p>
        <p>会员：免费</p>
      </div>
    </div>-->
    <!-- 会员服务 -->
    <!-- <div class="font-service font-vip clearfix">
      <div class="font-left">会员服务</div>
      <div class="font-right">查看全部</div>
    </div>
    <div class="service-img">
      <div>
        <img
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2381973937,1303139169&fm=202&mola=new&crop=v1"
          alt
        >
        <span>沃音乐粉粉日记会员</span>
      </div>
    </div>
    <div class="service-img">
      <div>
        <img
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2381973937,1303139169&fm=202&mola=new&crop=v1"
          alt
        >
        <span>沃音乐粉粉日记会员</span>
      </div>
    </div>-->
    <!-- 精彩推荐 -->
    <!-- <div class="font-tui font-vip clearfix">
      <div class="font-left">精彩推荐</div>
    </div>-->
    <!-- 精彩推荐图片 -->
    <!-- <div class="img-tui">
      <div>
        <img
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2381973937,1303139169&fm=202&mola=new&crop=v1"
          alt
        >
      </div>
      <div>
        <img
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2381973937,1303139169&fm=202&mola=new&crop=v1"
          alt
        >
      </div>
    </div>-->
    <!-- 学乐乐课堂 -->
    <!-- <div class="font-tui font-vip clearfix">
      <div class="font-left">学乐乐课堂</div>
    </div>-->
    <!-- 精彩推荐图片 -->
    <!-- <div class="img-xue img-tui">
      <div>
        <img
          src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2381973937,1303139169&fm=202&mola=new&crop=v1"
          alt
        >
      </div>
    </div>-->
    <a href="#" id="to-top" v-show="flag">
      <img src="../../static/images/95498789.png">
    </a>
  </div>
</template>
<script>
import vuescroll from "../../node_modules/vuescroll";
import ha from "./leb/Ha";

export default {
  data: () => ({
    images: [
      "http://club.10155.com/credit-res/index/a8ddb710-786d-41a8-afd7-c169bdd1cf0d.jpeg",
      "http://club.10155.com/credit-res/index/f238b185-f51c-4f90-a70a-1be4532a0820.jpeg",
      "http://club.10155.com/credit-res/index/11fc62ca-ad02-4495-b4fc-47e708006de0.jpeg"
    ],
    guang: [
      "../../static/images/654654.jpeg",
      "../../static/images/654654.jpeg"
    ],
    // 设置滚动条样式
    ops: {
      vuescroll: {},
      scrollPanel: {},
      rail: {},
      bar: { opacity: 0 }
    },
    active: 0,
    flag: false,
  }),
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop(el) {
      let topBtn = document.getElementById("to-top");
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
        // topBtn.style.display = "block";
        this.flag = true;
      } else {
        // topBtn.style.display = "none";
        this.flag = false;
      }
    }
  },
  components: {
    vuescroll,
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
.home {
  padding: 0.1rem;
  .logo {
    // 轮播图
    height: 1rem;
    width: 100%;
    border-radius: 0.05rem;
    overflow: hidden;
    background-image: linear-gradient(-135deg, #7e8286, #000000);
    margin-top: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  // 轮播图
  > .swipe-img {
    height: 1.5rem;
    width: 100%;
    border-radius: 0.05rem;
    .van-swipe-item {
      overflow: visible;
      .swipe-img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 质询
  .__view {
    margin-top: 0.2rem;
    > div {
      width: 4.5rem;
      height: 0.7rem;
      > div {
        float: left;
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.35rem;
        font-size: 0.14rem;
        text-align: center;
        > img {
          height: 70%;
        }
        > span {
          display: block;
        }
      }
    }
  }
  // 广告轮播图
  .swipe-advertisement {
    margin-top: 0.2rem;
    height: 1rem;
    width: 100%;
    border-radius: 0.05rem;
    .van-swipe-item {
      overflow: visible;
      .swipe-img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 会员领取
  .font-vip {
    margin-top: 0.2rem;
    > .font-left {
      font-size: 0.18rem;
      font-weight: 700;
      float: left;
    }
    > .font-right {
      font-size: 0.14rem;
      color: #999;
      float: right;
    }
  }
  > .box-vip {
    text-align: center;
    margin-bottom: 0.1rem;
    > div:hover {
      opacity: 0.7;
      background-color: whitesmoke;
    }
    > div {
      transition: all 0.3;
      width: 48%;
      height: 1.9rem;
      margin-top: 0.1rem;
      border-radius: 0.05rem;
      font-size: 0.12rem;
      box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s;
      > img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
        padding-top: 0.2rem;
      }
      > p {
        margin: 0;
        padding-bottom: 0.05rem;
      }
      > .child-p {
        display: block;
        margin: 0 auto;
        width: 1.3rem;
        margin-top: 0.1rem;
        font-size: 0.14rem;
        color: #030303;
        letter-spacing: 0;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      > p:nth-child(4) {
        color: #999;
      }
      > p:nth-child(5) {
        color: #ad6bff;
      }
    }
    > div:nth-child(2n + 1) {
      float: left;
    }
    > div:nth-child(2n) {
      float: right;
    }
  }
  // 铃声轮播图
  > .swipe-ring {
    margin-top: 0.1rem;
  }
  // 铃声
  > .ring {
    margin-top: 0.2rem;
    > div {
      margin-top: 0.1rem;
      box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
      height: 0.6rem;
      width: 100%;
      border-radius: 0.05rem;
      box-sizing: border-box;
      > .font-number {
        width: 0.6rem;
        height: 100%;
        text-align: center;
        float: left;
        > span {
          line-height: 0.5rem;
          color: #999;
        }
      }
      > .song {
        margin-top: 0.08rem;
        float: left;
        > span {
          display: block;
        }
        > span:nth-child(2) {
          color: #999;
          font-size: 0.14rem;
        }
      }
      > .ico-play {
        float: right;
        line-height: 0.6rem;
        > .van-icon {
          margin-right: 0.15rem;
        }
      }
    }
  }
  // 服务会员
  .font-service {
    margin-bottom: 0.1rem;
  }
  // 会员服务图片
  .service-img {
    > div {
      height: 1.25rem;
      width: 100%;
      border-radius: 0.05rem;
      overflow: hidden;
      > img {
        height: 1rem;
        width: 100%;
      }
    }
  }
  // 精彩推荐
  .font-tui {
  }
  .img-tui {
    margin-top: 0.1rem;
    > div {
      width: 100%;
      height: 1rem;
      border-radius: 0.05rem;
      overflow: hidden;
      margin-top: 0.1rem;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  #to-top {
    display: block;
    position: fixed;
    z-index: 666;
    width: 0.5rem;
    height: 0.5rem;
    bottom: 0.7rem;
    right: 0.2rem;
    background: linear-gradient(-135deg, #74bcf7, #ad6bff);
    border-radius: 50%;
    -webkit-box-shadow: 0 0.04rem 0.06rem rgba(102, 0, 213, 0.3);
    box-shadow: 0 0.04rem 0.06rem rgba(102, 0, 213, 0.3);
    -webkit-transition: all 0.3s;
    transition: all 1s;
    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      width: 42%;
    }
  }
}
</style>