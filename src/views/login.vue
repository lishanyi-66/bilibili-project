<template>
  <div class="login">
    <login-top middleTop="登录bilibili">
      <div slot="right" @click="registerClick" style="font-size: 10px">
        用户注册
      </div>
    </login-top>
    <!-- <login-text
      label="昵称"
      placeholder="请输入昵称"
      style="margin: 4vw 0"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.name = res)"
    ></login-text> -->
    <login-text
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.username = res)"
      style="margin: 15px 0"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.password = res)"
    ></login-text>
    <login-btn btnText="登录" @loginSubmit="loginSubmit"></login-btn>
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
      model: {},
    };
  },
  created() {},
  mounted() {},
  methods: {
    // successInput(content) {
    //   this.name = content;
    //   this.username = content;
    //   this.password = content;
    //   // console.log(this.name);
    // },
    async loginSubmit() {
      //再一次效验正则
      let ruleg = /^.{6,16}$/;
      // console.log("被点击了");
      if (
        // ruleg.test(this.model.name) &&
        ruleg.test(this.model.username) &&
        ruleg.test(this.model.password)
      ) {
        // console.log("验证通过");
        const res = await this.$http.post("/login", this.model);
        console.log(res);
        this.$msg.fail(res.data.msg);
        if (res.data.code == 301 || res.data.code == 302) {
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 1000);
      } else {
        this.$msg.fail("登录失败，重新输入");
      }
    },
    registerClick() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang='less' scoped>
// .login{
//     background-color: #f4f4f4;
// }
</style>