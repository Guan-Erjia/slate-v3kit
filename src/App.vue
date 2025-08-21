<script setup lang="ts">
import { Slate, Editable, type RenderElementProps } from 'slate-vue3';
import { createEditor } from 'slate-vue3/core';
import { withDOM } from 'slate-vue3/dom';
import { withHistory } from 'slate-vue3/history';
import Toolbar from './ui/Toolbar.vue';
import Undo from './ui/history/Undo.vue';
import Redo from './ui/history/Redo.vue';
import ButtonGroup from './ui/ButtonGroup.vue';
import { initialChildren } from './utils/initial-children';
import { Files } from '@element-plus/icons-vue';
import { h } from 'vue';
import { ElIcon } from 'element-plus';

const editor = withHistory(withDOM(createEditor()))
editor.children = initialChildren as any

const renderElement = ({ element, children, attributes }: RenderElementProps) => {
  switch (element.type) {
    case 'p':
      return h('div', attributes, children);
    case 'h1':
      return h('h1', attributes, children);
    case 'h2':
      return h('h2', attributes, children);
    case 'h3':
      return h('h3', attributes, children);
    case 'h4':
      return h('h4', attributes, children);
    case 'h5':
      return h('h5', attributes, children);
    case 'h6':
      return h('h6', attributes, children);
    case 'a':
      return h('a', attributes, children);
    case 'table':
      return h('table', {
        style: {
          position: 'relative',
        }
      }, h('tbody', attributes, children))
    case 'tr':
      return h('tr', attributes, children)
    case 'td':
      return h('td', attributes, children)
    case 'th':
      return h('th', attributes, children)
    case 'img':
      return h('img', { ...attributes, src: element.url }, children)
    case 'blockquote':
      return h('blockquote', attributes, children)
    case 'mention':
      return h('div', { ...attributes, contentEditable: false, class: 'mention' }, element.value)
    case 'file':
      return h('div', { ...attributes, class: 'file' }, [
        h(ElIcon, { size: 20 },
          () => h(Files)
        ),
        h('span', element.name)
      ])
    case 'audio':
      return h('audio', { ...attributes, controls: true, src: element.url, class: 'audio' }, children)
  }
  console.log(element)
  return h('div', attributes, children); // Default rendering
};
</script>

<template>
  <Slate :editor="editor" :render-element="renderElement">
    <Toolbar>
      <ButtonGroup>
        <Undo />
        <Redo />
      </ButtonGroup>
    </Toolbar>
    <Editable class="editable" />
  </Slate>
</template>

<style>
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

.editable a {
  text-decoration: underline;
  text-decoration-color: black;
  text-underline-offset: 4px;
}

.editable .mention {
  padding: 2px 6px;
  background-color: hsl(240 4.8% 95.9%);
  display: inline-block;
  border-radius: 6px;
}

.editable .file {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
}

.editable .file:hover {
  background-color: hsl(240 4.8% 90%);
}

.editable .audio {
  width: 100%;
  margin-top: 8px;
}
</style>
