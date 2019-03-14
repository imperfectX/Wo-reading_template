<template>
  <div class="help">
    <!-- 头部 -->
    <van-nav-bar
      title="帮助中心"
      left-text
      left-arrow
      @click-left="onClickLeft"
      style="font-weight=700;"
      :border="false"
    />
    <!-- 信息 -->
    <div class="login">
      <div>
        <h3 class="title">常见问题</h3>
        <ul>
          <li>
            <h4>1、目前沃音乐俱乐部提供哪些会员服务？</h4>
            <p>音乐俱乐部提供沃音乐铂金/黄金会员专享特权。其中，铂金会员每月免费领取1款月会员产品，黄金会员每月免费领取2款周会员产品。</p>
          </li>
          <li>
            <h4>2、沃音乐俱乐部会员可以享受哪些会员权益</h4>
            <p>沃音乐俱乐部会员可以享受如下权益：每月领热门VIP会员，会员商品低至6折起，免费订炫铃，免费歌曲下载，免流量访问门户，优先获取明星活动等。</p>
          </li>
          <li>
            <h4>3、沃音乐俱乐部只有联通用户能用吗？</h4>
            <p>沃音乐俱乐部支持联通、移动、电信全网用户输入手机号码登录。</p>
          </li>
          <li>
            <h4>4、如何开通沃音乐俱乐部会员？</h4>
            <p>通过“沃音乐”微信公众号底部菜单-“俱乐部”进入，点击“开会员”菜单进入会员中心页面，选择需要开通会员点击开通按钮即可。</p>
          </li>
          <li>
            <h4>5、沃音乐俱乐部有哪些支付方式？</h4>
            <p>目前沃音乐俱乐部会员支持话费支付、微信支付；俱乐部商品支持微信支付。其中俱乐部会员话费开通，按照自然月计费，按月自动续费；俱乐部会员微信开通，按照非自然月（31天）计费，按月自动续费。</p>
          </li>
          <li>
            <h4>6、如何兑换沃音乐权益商品？</h4>
            <p>通过通过“沃音乐”微信公众号底部菜单-“俱乐部”进入，点击“兑换”菜单进入商品兑换页面，输入兑换码后点击兑换按钮即可。</p>
          </li>
          <li>
            <h4>7、沃音乐俱乐部会员可以提供月卡/季卡/半年卡/年卡购买吗？</h4>
            <p>当前用户可以通过兑换码的方式，兑换黄金/铂金会员的月卡/季卡/半年卡/年卡，有效时间按照非自然月进行计算。</p>
          </li>
          <li>
            <h4>8、可以开通多个会员服务吗？</h4>
            <p>沃音乐俱乐部会员不互斥，即用户可订购不同会员产品。同一会员不可重复订购。</p>
          </li>
          <li>
            <h4>9、沃音乐俱乐部畅音包可以享受哪些权益？</h4>
            <p>畅音包用户可以免费订购沃音乐俱乐部的炫铃产品，并享受铃声专题、分类铃声等会员特权。</p>
          </li>
          <li>
            <h4>10、沃音乐畅音包只有联通用户能用吗？</h4>
            <p>沃音乐畅音包仅支持联通用户使用。</p>
          </li>
          <li>
            <h4>11、怎样开通沃音乐畅音包会员？</h4>
            <p>开通沃音乐俱乐部黄金/铂金会员用户，可免费开通畅音包会员；开通合作方与沃音乐联合会员产品的会员用户，可免费开通畅音包会员。</p>
          </li>
          <li>
            <h4>12、如何退订沃音乐俱乐部会员？</h4>
            <p>通过通过“沃音乐”微信公众号底部菜单-“俱乐部”进入，点击“我的”菜单进入“我的会员”页面，选择需要退订的会员产品点击“退订”按钮即可。</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    onClickLeft() {
      history.back();
    }
  }
};
</script>

<style lang="less">
.help {
  padding: 0 0.2rem;
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
  // 帮助信息
  > .login {
    margin: 0.1rem 0 0.2rem 0;
    box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 0.05rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: #fff;
    > div {
      > h3 {
        padding: 0.15rem 0 0 0;
        margin: 0;
      }
      > ul {
        padding-bottom: 0.2rem;
        > li {
          font-size: 0.13rem;
          color: #000;
          line-height: 0.18rem;
          > h4 {
            font-size: 0.14rem;
            color: #000;
            line-height: 0.2rem;
            margin-bottom: 0.03rem;
          }
          > p {
            margin: 0;
          }
        }
      }
    }
  }
  
}
</style>