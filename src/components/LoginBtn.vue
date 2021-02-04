<template>
  <div @click="loginClick" class="btnbox">
    <div class="btn">{{ btnText }}</div>
  </div>
</template>

<script>
export default {
  props: ["btnText"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    loginClick() {
      this.$emit("loginSubmit");
    },
  },
};
</script>

<style lang='less' scoped>
.btnbox {
  padding: 15px 10px; //不用设置按钮的宽度，也不用居中对齐，直接设置padding 就行
}
.btn {
  background-color: #00a1d6;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 80%;
  height: 12vw;
  border-radius: 25px;
  color: white;
}
</style>