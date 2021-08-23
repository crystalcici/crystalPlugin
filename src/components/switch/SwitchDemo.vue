<template>
  <div class="container">
    <Switch v-model:value="initSwitchStatus"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from './Switch.vue'

export default {
  components: {
    Switch
  },
  setup() {
    const initSwitchStatus = ref(true)
    return { initSwitchStatus }
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">

</style>
