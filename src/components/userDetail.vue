<template>
  <div class="m-space-info">
    <div class="banner"></div>
    <div class="part1">
      <div class="face">
        <!-- <div class="imgface"></div> -->
        <img :src="userinfo.user_img" alt="" v-if="userinfo.user_img" />
        <img src="../assets/头像.jpeg" alt="" v-else />
      </div>
      <div class="relation">
        <div class="count">
          <div class="fans">
            <div class="num">35</div>
            <div>粉丝</div>
          </div>
          <div class="focus">
            <div class="num">163</div>
            <div>关注</div>
          </div>
          <div class="likes">
            <div class="num">30</div>
            <div>获赞</div>
          </div>
        </div>
        <!-- 编辑资料按钮 -->
        <div class="follow-btn">
          <div @click="$router.push('/edit')">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="base">
        <div class="name">{{ userinfo.name }}</div>
        <div class="level">等级</div>
      </div>
      <div class="desc">
        <div class="content">这个人很神秘，什么都没留下</div>
        <div class="spread-btn">
          <a href="#">展开</a>
        </div>
      </div>
    </div>
    <div class="bars">
      <span>动态</span>
      <span>视频</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userinfo"],
};
</script>

<style lang='less' scope>
.m-space-info {
  width: 100%;
  background-color: white;
  .banner {
    //   background-image: "../assets/bannerTop_new.png";
    width: 100%;
    height: 90px;
    //   background-color: red;
    background-image: url("../assets/bannerTop_new.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .part1 {
    // background-color: white;

    display: flex;
    // margin-right: 10px;
    .face {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        background-color: royalblue;
        border-radius: 50px;
      }
      // background-color: red;
    }
    .relation {
      flex: 4;
      margin: 10px 10px 10px 0;
      color: #999;
      font-size: 14px;
      .count {
        display: flex;
        justify-content: space-around;
        // align-items: center;
        .fans {
          flex: 1;
          text-align: center;
          position: relative;
          &::after {
            content: "";
            border-right: 1px solid #999;
            position: absolute;
            // color:red;
            bottom: 0;
            right: 0;
            top: 0;
            width: 1px;
            height: 40px;
            transform: scale(0.5);
            transform-origin: left;
          }
        }
        .focus {
          flex: 1;
          text-align: center;
          // border-right: 1px solid red;
          position: relative;
          &::after {
            content: "";
            border-right: 1px solid #999;
            position: absolute;
            // color:red;
            bottom: 0;
            right: 0;
            top: 0;
            width: 1px;
            height: 40px;
            transform: scale(0.5);
            transform-origin: left;
          }
        }
        .likes {
          flex: 1;
          text-align: center;
        }
      }
    }
    .follow-btn {
      width: 100%;
      border: 1px solid #fb7299;
      padding: 5px;
      border-radius: 5px;
      margin: 10px 0;
      text-align: center;
      color: #fb7299;
    }
  }
  .part2 {
    padding: 10px;
    .base {
      display: flex;
      // justify-content: center;
      align-items: center;

      .name {
        font-size: 20px;
        margin-right: 10px;
      }
    }
    .desc {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      margin-top: 10px;
    }
  }
  .bars {
    // padding: 10px;
    display: flex;
    span {
      display: block;
      // margin: 10px;
      padding: 10px;
      // margin:10px 10px 10px 10px;
      font-size: 14px;
    }
  }
}
</style>