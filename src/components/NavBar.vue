<template>
  <div class="navbar">
    <img src="../assets/logo.png" alt="" class="imglogo" />
    <div class="searchinput">
      <p>
        <van-icon name="search" color="#666" />
      </p>
    </div>
    <div class="perinfo">
      <div class="headpor">
        <img :src="imgUrl" alt="" @click="$router.push('/edit')" />
      </div>
      <img src="../assets/download.png" alt="" class="download" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["userinfo"],
  data() {
    return {
      imgUrl: "",
    };
  },
  async mounted() {
    const res = await this.$http.get("/user/" + localStorage.getItem("id"));
    this.imgUrl = res.data[0].user_img;
  },
};
</script>

<style lang='less' scope>
.navbar {
  width: 100%;
  background-color: white;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .perinfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headpor img {
      width: 22px;
      height: 22px;
      background-color: turquoise;
      border-radius: 100%;
    }
    .download {
      width: 22vw;
      margin-right: 0px;
    }
  }
  .imglogo {
    width: 22vw;
    // margin: 0 10px;
  }
  .searchinput {
    width: 42vw;
    background-color: #f4f4f4;
    height: 24px;
    border-radius: 30px;
    p {
      font-size: 16px;
      margin: 4px 10px;
    }
  }
}
</style>