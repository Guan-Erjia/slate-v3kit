<template>
    <Button title="Redo" :disabled="disabled" @click="onClickRedo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-redo2 lucide-redo-2" aria-hidden="true">
            <path d="m15 14 5-5-5-5"></path>
            <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
        </svg>
    </Button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Button from '../Button.vue'
import { useEditor } from 'slate-vue3';
import { HistoryEditor } from 'slate-vue3/history';

const editor = useEditor();
const disabled = computed(() => {
    if (HistoryEditor.isHistoryEditor(editor)) {
        return editor.history.redos.length === 0;
    }
})
const onClickRedo = () => {
    if (!disabled.value && HistoryEditor.isHistoryEditor(editor)) {
        HistoryEditor.redo(editor);
    }
}
</script>