<template>
  <div class="login">
      <div></div>
      <div>{{middleTop}}</div>
      <div></div>
  </div>
</template>

<script>
  export default {
  props:[
      'middleTop'    
  ],
          
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
.login{
    display: flex;
    justify-content: center;
        align-items: center;
    background-color: white;
    width: 100%;
    height: 12vw;
    div{
        flex: 1;
        display: flex;
        justify-content: center;
        font-size: 4vw;
        
    }
}

</style>