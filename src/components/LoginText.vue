<template>
  <div>
    <van-field
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "type", "rule"],
  data() {
    return {
      content: "",
    };
  },
  watch: {
    content() {
      // console.log(111);
      this.handlerulg();
    },
  },
  created() {},
  mounted() {},
  methods: {
    handlerulg() {
      const rue = new RegExp(this.rule);
      // console.log(rue);
      if (rue.test(this.content)) {
        // console.log("正则效验成功了");
        this.$emit("inputChange", this.content);
      }
    },
  },
};
</script>

<style lang='less' scoped>
</style>