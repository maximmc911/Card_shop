<template>
    <div>
        <p>{{ props.props[0] }}</p>
        <select name="" id="" v-model="chooseSelect.section">
            <option value="0">Не выбрано</option>
            <option v-bind:value="item.id" v-for="item in props.props[1]" :key="item.id">{{ item.name }}</option>
        </select>
    </div>
</template>

<script setup lang='ts'>
import { reactive, watchEffect } from 'vue';

// constants 

const props = defineProps({
    props: {
        type: Object,
        required: true
    }
})
const chooseSelect = reactive<materialItem>({
    name: props.props[0],
    section: 0,
});
const emit = defineEmits();

// hooks

watchEffect(() => {
    emit(`toggle`, chooseSelect)
})
</script>

<style scoped>
p {
    font-family: 'SF Pro Display';
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.03em;
    margin-left: 16px;
    margin-bottom: 5px;
    color: rgba(79, 79, 79, 1);
}

select {
    width: 280px;
    height: 40px;
    background: rgba(242, 242, 242, 1);
    font-family: 'SF Pro Display';
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.03em;
    padding-left: 15px;
    border: none;
}
</style>