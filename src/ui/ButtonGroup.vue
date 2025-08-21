<template>
    <slot></slot>
    <div class="toolbar-br">
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.toolbar-br {
    display: inline-block;
    width: 1px;
    height: 28px;
    margin: 0 6px;
    background-color: oklch(92.2% 0 0);
}
</style>