<template>
  <div class="toolbar-container">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>

</script>
<style>
.toolbar-container {
  border-bottom: 1px solid oklch(92.2% 0 0);
  padding: 4px;
  display: flex;
  align-items: center;
}
.toolbar-container > * {
  flex-shrink: 0;
}
</style>