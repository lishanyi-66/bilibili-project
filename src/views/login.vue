<template>
  <div class="login">
      <login-top middleTop='注册bilibili'></login-top>
      <login-text label="昵称" placeholder="请输入昵称" style="margin:4vw 0"></login-text>
      <login-text  label="手机号码" placeholder="请输入手机号码" rule='^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$'></login-text>
      <login-text label="密码" placeholder="请输入密码" type='password' rule='^.{6,16}$'></login-text>
      <login-btn btnText="注册"></login-btn>

  </div>
</template>

<script>
import LoginBtn from '../components/LoginBtn.vue';
import LoginText from '../components/LoginText.vue';
// import loginTop from '../components/LoginTop'
import LoginTop from '../components/LoginTop.vue';

  export default {
    components:{
        // loginTop
        LoginTop,

        LoginText,
        LoginBtn
    },
    
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
// .login{
//     background-color: #f4f4f4;
// }
</style>