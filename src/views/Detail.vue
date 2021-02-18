<template>
  <div class="box">
    <!-- <div>{{ detailitem.id }}</div> -->
    <img src="" alt="" />
    <div>{{ detailitem.name }}</div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
};
</script>

<style  scope>
.box img {
  width: 100%;
  height: 140px;
  background-color: #eee;
  margin-bottom: 10px;

  /* display: block; */
}
</style>