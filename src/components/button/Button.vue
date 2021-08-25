<template>
  <button class="crystal-btn" :class="{[`theme-${theme}`]: theme}">
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
}
</script>