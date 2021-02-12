<template>
  <div v-if="model">
    <nav-bar></nav-bar>
    <div class="box">
      <!-- <div class="uploadfile"></div> -->
      <van-uploader class="uploaderimg" :after-read="afterRead" />
      <edit-banner left="头像">
        <div slot="right">
          <img
            :src="model.user_img"
            alt=""
            class="head"
            v-if="model.user_img"
          />
          <img src="../assets/头像.jpeg" alt="" class="head" v-else />
        </div>
      </edit-banner>
      <edit-banner left="昵称" @bannerClick="show = true">
        <a href="javascript:;" slot="right">{{ model.name }}</a>
      </edit-banner>
      <edit-banner left="UID">
        <a href="javascript:;" slot="right">{{ model.username }}</a>
      </edit-banner>
      <edit-banner left="性别"></edit-banner>
      <edit-banner left="出生日期"></edit-banner>
      <edit-banner left="个性签名"></edit-banner>
      <van-dialog
        v-model="show"
        title="昵称"
        show-cancel-button
        @confirm="confirmClick"
      >
        <van-field v-model="context" label="" autofocus />
      </van-dialog>
    </div>
  </div>
</template>

<script>
import EditBanner from "../components/EditBanner.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar, EditBanner },
  data() {
    return {
      model: {},
      show: false,
      context: "",
    };
  },

  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      // console.log(model)
      this.model = res.data[0];
      console.log(this.model);
    },
    async afterRead(file) {
      //   console.log(file);
      const formdata = new FormData(); //文件上传
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.userUpdate();
    },
    async userUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
    },
    confirmClick() {
      // console.log("用户点击了确认键");
      this.model.name = this.context;
      this.userUpdate();
      context: "";
      // console.log(this.model.name);
    },
  },
  created() {
    this.selectUser();
  },
};
</script>

<style lang="less" scope>
.box {
  margin-top: 15px;
  position: relative;
  .uploaderimg {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0; //透明度
  }
}
.head {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}
</style>