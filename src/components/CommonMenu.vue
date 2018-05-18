<template>
  <div class="common-menu">
    <router-link to="/" class="menu-item">首页</router-link>
    <router-link to="/" class="menu-item">菜单2</router-link>
    <router-link to="/" class="menu-item">菜单3</router-link>
    <router-link to="/" class="menu-item">菜单4</router-link>
  </div>
</template>

<style scoped>
.common-menu{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.menu-item{
  flex: 1;
}
</style>
