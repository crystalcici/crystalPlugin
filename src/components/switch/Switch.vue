<template>
  <button @click="toggle" :class="{ checked: switchStatus }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup(){
    const switchStatus = ref(false)
    const toggle = () => {
      switchStatus.value = !switchStatus.value
    }
    return { switchStatus, toggle }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h * 2;
    border: none;
    background: lightgray;
    border-radius: $h/2;
    position: relative
  }
  span{
    position: absolute;
     top: 2px;
     left: 2px;
     height: $h2;
     width: $h2;
     background: white;
     border-radius: $h2/2;
  }
  button.checked{
    background: #409eff;
    span{
      left: calc(100% - #{ $h2 } - 2px);
    }
  }
</style>