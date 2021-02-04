<template>
  <div>
    <nav-bar />
    <!-- 背景 -->

    <!-- 栏目 -->
    <user-detail />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import UserDetail from "../components/userDetail.vue";
export default {
  components: { NavBar, UserDetail },
};
</script>

<style lang='less' scope>
</style>