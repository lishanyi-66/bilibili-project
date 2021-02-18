<template>
  <div class="box" @click="$router.push(`/article/${detailitem.id}`)">
    <div class="imgparent">
      <img src="" alt="" />
      <div class="outer">
        <div class="evaluationBar">
          <span>
            <van-icon name="play-circle-o" size="18" />
            <i>699</i>
          </span>
          <span>
            <van-icon name="chat-o" size="18" />
            <i>66</i>
          </span>
        </div>
      </div>
    </div>

    <div>{{ detailitem.name }}</div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
};
</script>

<style  scope lang='less'>
.box {
  position: relative;
}
.box img {
  width: 100%;
  height: 120px;
  background-color: #eee;
  margin-bottom: 8px;
}
.imgparent {
  position: relative;
}
.outer {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  // top: 88px;
}
.evaluationBar {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;
  // position: absolute;
  //  vertical-align: middle;
  span {
    font-size: 14px;
    i {
      // display: block;
      margin-left: 4px;
      vertical-align: middle;
    }
  }
}
</style>