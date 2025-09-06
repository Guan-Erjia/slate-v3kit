<template>
    <span ref="menuRef" class="comment">{{ leaf.text }}
        <Teleport v-if="showComment" to="body">
            <div class="comment-content" :style="menuStyle">
                <div class="comment-item" v-for="item in commentInfo?.comments">
                    <div class="comment-item-header">
                        <img style="width: 20px;height: 20px; border-radius: 100%;"
                            :src="`https://api.dicebear.com/9.x/glass/svg?seed=${item.userId}`" alt="">
                        <span class="comment-name">{{ item.userId }}</span>
                        <span class="comment-time">{{ getDetailedTimeDiff(dayjs(item.createdAt)) }}</span>
                    </div>

                    <p class="comment-text">{{ item.contentRich }}</p>
                </div>
            </div>
        </Teleport>
    </span>
</template>
<script setup lang="ts">
import { useEditor, useFocused, useSelection, } from 'slate-vue3';
import { Path } from 'slate-vue3/core';
import { DOMEditor } from 'slate-vue3/dom';
import { computed, ref, type CSSProperties } from 'vue';
import { discussionsData } from './uitls'
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function getDetailedTimeDiff(startTime: Dayjs) {
    const now = dayjs();
    const diffDuration = dayjs.duration(now.diff(startTime));

    const days = diffDuration.days();
    const hours = diffDuration.hours();
    const minutes = diffDuration.minutes();
    const seconds = diffDuration.seconds();

    let result = [];
    if (days > 0) result.push(`${days}天`);
    if (hours > 0) result.push(`${hours}小时`);
    if (minutes > 0) result.push(`${minutes}分钟`);
    if (seconds > 0) result.push(`${seconds}秒`);

    return result.join('') || '不到1秒';
}


const props = defineProps<{
    leaf: {
        comment: boolean,
        comment_discussion1: boolean,
        text: string,
    },
}>()
const editor = useEditor()
const inFocus = useFocused()
const menuRef = ref<HTMLDivElement>()
const selection = useSelection()
const showComment = computed(() => {
    const path = DOMEditor.findPath(editor, props.leaf)
    return selection.value && inFocus.value && Path.equals(selection.value.focus.path, path)
})

const menuStyle = computed(() => {
    const style: CSSProperties = {}
    const rect = menuRef.value?.getBoundingClientRect()
    if (menuRef.value && rect) {
        style.opacity = 1
        style.top = `${rect.top - menuRef.value.offsetHeight}px`
        style.left = `${rect.left}px`
    }
    return style
})
const commentInfo = computed(() => {
    const key = Object.keys(props.leaf).find(key => key.startsWith('comment_'))
    if (key) {
        const discussionId = key.replace('comment_', '')
        return discussionsData.find(d => d.id === discussionId)
    }
    return null
})
</script>

<style scoped>
.comment {
    background-color: #facc1521;
    border-bottom: 2px solid #facc155c;
}

.comment-item-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
}

.comment-content {
    padding: 16px;
    position: absolute;
    z-index: 1;
    top: -10000;
    left: -10000;
    display: block;
    margin-top: -6px;
    opacity: 0;
    background-color: white;
    width: 370px;
    border: 1px solid gainsboro;
    border-radius: 8px;
    transition: opacity 0.75s;
    line-height: 1;
}

.comment-text {
    font-size: 14px;
    line-height: 150%;
    padding-left: 28px;
}

.comment-time {
    font-size: 12px;
    color: gray;
}

.comment-name {
    font-size: 14px;
    font-weight: 600;
}
</style>