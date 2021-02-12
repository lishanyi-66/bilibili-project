<template>
  <div @click="bannerClick">
    <div class="selectbanner">
      <span>{{ left }}</span>
      <span><slot name="right"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["left"],
  methods: {
    bannerClick() {
      this.$emit("bannerClick");
    },
  },
};
</script>

<style lang="less" scope>
.selectbanner {
  background-color: white;
  padding: 15px;
  font-size: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#333
  //   margin-top: 15px;
}
</style>