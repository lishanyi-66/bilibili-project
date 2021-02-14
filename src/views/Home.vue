<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" animated>
      <van-tab
        v-for="(item, index) in category"
        :title="item.title"
        :key="index"
      >
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: { NavBar },
  methods: {
    async SelectCategory() {
      const res = await this.$http.get("/category");
      console.log(res);
      this.category = res.data;
    },
  },
  created() {
    this.SelectCategory();
  },
};
</script>

<style>
</style>