<template>
  <div>
    <nav-bar></nav-bar>
    <div class="videobox">
      <div class="video">
        <video :src="model.content" controls="controls"></video>
      </div>
    </div>
    <div class="detailinfo">
      <div>{{ model.name }}</div>
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
}
</style>