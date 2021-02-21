<template>
  <div id="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  <!-- <router-view/> -->
  </div>
</template>

<style lang="less">
@import url('./style/global.css');

</style>
