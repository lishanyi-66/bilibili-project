<template>
  <div>
    <nav-bar></nav-bar>
    <div class="videobox">
      <div class="video">
        <video :src="model.content" controls="controls"></video>
      </div>
    </div>
    <!-- 打开app 按钮 -->
    <div>
      <div class="btnapp">
        <span>打开app,流畅又高清</span>
      </div>
    </div>
    <div class="detailinfo">
      <div class="hotbtn">
        <span><van-icon name="fire" />热门</span>
        <div>{{ model.name }}</div>
      </div>

      <van-icon name="arrow-down" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      console.log(res);
      this.model = res.data[0];
    },
  },
  created() {
    this.articleitemData();
  },
};
</script>

<style lang='less' scope>
.videobox {
  // width: 100%;
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
}
.detailinfo {
  padding: 15px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btnapp {
  width: 90%;
  background-color: #fb7299;
  padding: 10px;
  // scale: 50%;
  border-radius: 30px;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  span {
    color: white;
  }
}
.hotbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    padding: 6px;
    background-color: #eee;
    border-radius: 30px;
    font-size: 15px;
    color: #fb7299;
  }
}
</style>