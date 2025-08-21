<script setup lang="ts">
import { Slate, Editable } from 'slate-vue3';
import { createEditor } from 'slate-vue3/core';
import { withDOM } from 'slate-vue3/dom';
import { withHistory } from 'slate-vue3/history';
import Toolbar from './ui/Toolbar.vue';
import Undo from './ui/history/Undo.vue';
import Redo from './ui/history/Redo.vue';
import ButtonGroup from './ui/ButtonGroup.vue';
import { initialChildren } from './utils/initial-children';

const editor = withHistory(withDOM(createEditor()))
editor.children = initialChildren as any
</script>

<template>
  <Slate :editor="editor">
    <Toolbar>
      <ButtonGroup>
        <Undo />
        <Redo />
      </ButtonGroup>
    </Toolbar>
    <Editable class="editable" />
  </Slate>
</template>

<style scoped>
.editable {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  outline: none;
  padding-inline: max(64px, 50% - 350px);
  padding-top: 16px;
  padding-bottom: 20vh;
}
</style>
