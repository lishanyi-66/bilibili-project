<template>
  <div>
      <van-field  :label="label" :placeholder="placeholder" :type='type' :rule='rule' v-model='context'/>
  </div>
</template>

<script>
  export default {
      props:[
          'label','placeholder','type','rule'
      ],
  data() {
    return {
        context:''
    };
  },
  watch:{
      context(){
          console.log(111)
      }
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

</style>