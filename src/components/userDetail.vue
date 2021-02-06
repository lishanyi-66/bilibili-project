<template>
  <div>
    <div class="backgoundImg"></div>
    <div class="part1">
      <div class="face">
        头像
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
          <button>编辑资料</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scope>
.backgoundImg {
  //   background-image: "../assets/bannerTop_new.png";
  width: 100%;
  height: 90px;
  //   background-color: red;
  background-image: url("../assets/bannerTop_new.png");
  background-repeat: no-repeat;
  //   background-position: center;
  background-size: 100%;
}
.part1 {
  background-color: white;
  width: 100%;
  height: 300px;
  display: flex;
  .face{
      flex: 2;
    }
  .relation{
    flex: 4;
    .count{
      
      display: flex;
      justify-content: space-around;
      // align-items: center;
      .fans{
        flex: 1;
        text-align: center;
      }
      .focus{
        flex: 1;
      }
      .likes{
        flex: 1;
      }
      
    }
  }
}
</style>