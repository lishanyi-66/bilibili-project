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
      <edit-banner left="UID" @bannerClick="textshow = true">
        <a href="javascript:;" slot="right">{{ model.username }}</a>
      </edit-banner>
      <edit-banner left="性别" @bannerClick="sexshow = true">
        <a href="javascript:;" slot="right">
          {{ model.gender == 1 ? "男" : "女" }}
        </a>
      </edit-banner>
      <edit-banner left="出生日期"></edit-banner>
      <edit-banner left="个性签名" @bannerClick="personshow = true">
        <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
      </edit-banner>
      <div class="editPart1">
        <div class="exitLogin" @click="$router.push('/login')">退出登录</div>
        <div class="back" @click="$router.push('/userinfo')">返回空间</div>
      </div>
      <!-- 昵称 -->
      <van-dialog
        v-model="show"
        title="昵称"
        show-cancel-button
        @confirm="confirmClick"
        @cancel="context = ''"
      >
        <van-field v-model="context" label="" autofocus />
      </van-dialog>
      <!-- UID栏目 -->
      <van-dialog
        v-model="textshow"
        title="UID"
        show-cancel-button
        @confirm="uidClick"
        @cancel="context = ''"
      >
        <van-field v-model="context" label="" autofocus />
      </van-dialog>
      <!-- 个性签名 -->
      <van-dialog
        v-model="personshow"
        title="个性签名"
        show-cancel-button
        @confirm="personClick"
        @cancel="context = ''"
      >
        <van-field v-model="context" label="" autofocus />
      </van-dialog>
    </div>
    <!-- 性别 -->
    <van-action-sheet
      v-model="sexshow"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
    />
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
      textshow: false,
      personshow: false,
      sexshow: false,
      context: "",
      actions: [
        { name: "女", value: 0 },
        { name: "男", value: 1 },
      ],
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
      if (res.data.code == 200) {
        this.$msg.fail("修改成功");
      }
    },
    confirmClick() {
      // console.log("用户点击了确认键");
      this.model.name = this.context;
      this.userUpdate();
      this.context = "";
      // console.log(this.model.name);
    },
    uidClick() {
      this.model.username = this.context;
      this.userUpdate();
      this.context = "";
    },
    personClick() {
      this.model.user_desc = this.context;
      this.userUpdate();
      this.context = "";
    },
    onSelect(data) {
      this.model.gender = data.value;
      this.userUpdate();
      this.sexshow = false;
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
.editPart1 {
  background-color: white;
  margin-top: 15px;
  .exitLogin {
    padding: 10px;
    text-align: center;
  }
  .back {
    padding: 10px;
    text-align: center;
  }
}
</style>