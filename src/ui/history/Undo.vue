<template>
    <Button title="Undo" :disabled="disabled" @click="onClickUndo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-undo2 lucide-undo-2" aria-hidden="true">
            <path d="M9 14 4 9l5-5"></path>
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
        </svg>
    </Button>
</template>
<script setup lang="ts">
import { HistoryEditor } from 'slate-vue3/history';
import Button from '../Button.vue'
import { computed } from 'vue';
import { useEditor } from 'slate-vue3';

const editor = useEditor();
const disabled = computed(() => {
    if (HistoryEditor.isHistoryEditor(editor)) {
        return editor.history.undos.length === 0;
    }
})

const onClickUndo = () => {
    if (!disabled.value && HistoryEditor.isHistoryEditor(editor)) {
        HistoryEditor.undo(editor);
    }
}
</script>