<template>
  <div class="login">
    <login-top middleTop="注册bilibili"></login-top>
    <login-text
      label="昵称"
      placeholder="请输入昵称"
      style="margin: 4vw 0"
      @inputChange="successInput"
    ></login-text>
    <login-text
      label="手机号码"
      placeholder="请输入手机号码"
      rule="^.{6,16}$"
      @inputChange="successInput"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="successInput"
    ></login-text>
    <login-btn
      btnText="注册"
      style="margin: 20px 0 0 0"
      @loginSubmit="loginSubmit"
    ></login-btn>
  </div>
</template>

<script>
import LoginBtn from "../components/LoginBtn.vue";
import LoginText from "../components/LoginText.vue";
// import loginTop from '../components/LoginTop'
import LoginTop from "../components/LoginTop.vue";

export default {
  components: {
    // loginTop
    LoginTop,

    LoginText,
    LoginBtn,
  },

  data() {
    return {
      name: "",
      username: "",
      password: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    successInput(content) {
      this.name = content;
      this.username = content;
      this.password = content;
      // console.log(this.name);
    },
    async loginSubmit() {
      //再一次效验正则
      let ruleg = /^.{6,16}$/;
      // console.log("被点击了");
      if (
        ruleg.test(this.name) &&
        ruleg.test(this.username) &&
        ruleg.test(this.password)
      ) {
        console.log("验证通过");
        const res = await this.$http.post("/register", {
          name: this.name,
          username: this.username,
          password: this.password,
        });
        console.log(res);
      }
    },
  },
};
</script>

<style lang='less' scoped>
// .login{
//     background-color: #f4f4f4;
// }
</style>