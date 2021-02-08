<template>
  <div class="login">
    <login-top middleTop="注册bilibili">
      <div slot="right" @click="loginClick" style="font-size: 10px">
        用户登录
      </div>
    </login-top>
    <login-text
      label="昵称"
      placeholder="请输入昵称"
      style="margin: 4vw 0"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.name = res)"
    ></login-text>
    <login-text
      label="手机号码"
      placeholder="请输入手机号码"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.username = res)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.password = res)"
    ></login-text>
    <login-btn btnText="注册" @loginSubmit="loginSubmit"></login-btn>
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
        ruleg.test(this.model.name) &&
        ruleg.test(this.model.username) &&
        ruleg.test(this.model.password)
      ) {
        console.log("验证通过");
        const res = await this.$http.post("/register", this.model);
        console.log(res);
        this.$msg.fail(res.data.msg);
        localStorage.setItem('id',res.data.id)
        localStorage.setItem('token',res.data.objtoken)
        setTimeout(()=>{
          this.$router.push('/userinfo')
        },1000)
      } else {
        this.$msg.fail("格式不正确，重新输入");
      }
    },
    loginClick() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang='less' scoped>
// .login{
//     background-color: #f4f4f4;
// }
</style>