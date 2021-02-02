<template>
  <div >
      <div class="btn">{{btnText}}</div>
  </div>
</template>

<script>
  export default {
      props:[
        'btnText'
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
.btn{
    background-color: #00a1d6;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 12vw;
    border-radius: 25px;
    color: white;
}

</style>