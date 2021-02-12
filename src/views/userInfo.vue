<template>
  <div>
    <nav-bar :userinfo="model" />
    <!-- 背景 -->

    <!-- 栏目 -->
    <user-detail :userinfo="model"></user-detail>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserDetail from "../components/userDetail.vue";
export default {
  components: { NavBar, UserDetail },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async UserInfoData() {
      // console.log('页面被调用')
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      // console.log(model)
      this.model = res.data[0];
      // console.log(lv)
      // this.model=lv
      // console.log(this.model)
    },
  },
  created() {
    this.UserInfoData();
  },
};
</script>

<style lang='less' scope>
</style>