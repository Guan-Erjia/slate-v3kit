<template>
    <ElTooltip :content="props.title" :visible="props.disabled ? false : undefined" effect="dark" :show-after="150"
        :hide-after="0" :show-arrow="false">
        <button v-bind="attrs" class="toolbar-button" :class="{ 'toolbar-button-disabled': props.disabled }">
            <slot></slot>
        </button>
    </ElTooltip>
</template>
<script lang="ts" setup>
import { useAttrs } from 'vue';

const props = defineProps<{
    title?: string
    disabled?: boolean
}>()
const attrs = useAttrs()
</script>
<style>
.toolbar-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    font-size: 16px;
    width: 32px;
    height: 32px;
    outline: none;
}

.toolbar-button>svg {
    width: 16px;
    height: 16px;
}

.toolbar-button:hover>svg {
    color: dimgrey;
}

.toolbar-button:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
}

.toolbar-button-disabled>svg {
    color: rgba(16, 16, 16, 0.3);
}

.toolbar-button-disabled:hover {
    background-color: unset;
}
</style>