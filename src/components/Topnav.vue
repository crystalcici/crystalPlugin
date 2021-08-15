<template>
  <div class="top-nav">
    <div class="logo" @click="toogleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
 setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toogleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toogleMenu }
 }
}
</script>

<style lang="scss" scoped>
.top-nav{
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  .logo{
    max-width: 6em;
    margin-right: auto
  }
  .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    li{
      margin: 0 1em
    }
  }  
  @media (max-width: 500px) {
    .menu{
      display: none;
    }
    .logo{
      margin: 0 auto
    }
  } 
}
</style>