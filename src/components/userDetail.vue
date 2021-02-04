<template>
  <div>
    <div class="backgoundImg"></div>
    <div class="part1">
      <div class="face"></div>
      <div class="relation">
        <div class="count">
          <div class="fans"></div>
          <div class="focus"></div>
          <div class="likes"></div>
        </div>
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
}
</style>