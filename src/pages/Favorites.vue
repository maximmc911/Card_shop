<script setup lang='ts'>
import { ref } from 'vue';
import Card from '../components/Card.vue';
import Button from '../components/UI/button/Button.vue';

// constants 
const data = ref<Array<itemCatalog>>([]);
const emit = defineEmits();

//cycle & condition

if (localStorage.getItem('favorite') !== null) {
    const dataLocalStorage: string | any = localStorage.getItem('favorite');
    data.value.push(...JSON.parse(dataLocalStorage));
}

// functions

const UpdateCard = (): void => {
    data.value.length = 0;
    if (localStorage.getItem('favorite') !== null) {
        const dataLocalStorage: string | any = localStorage.getItem('favorite')
        data.value.push(...JSON.parse(dataLocalStorage));
    }
}
const HandlePage = (): void => {
    emit(`router`, `catalog`)
}
</script>
<template>
    <div>
        <header>
            <h1>Избранное</h1>
        </header>
        <section v-if="data.length == 0">
            <h1>К сожалению, ничего пока не выбрано</h1>
        </section>
        <section v-else>
            <div class="cards">
                <div v-for="item in data" :key="item.id" @click="UpdateCard">
                    <Card :props="item" />
                </div>
            </div>
        </section>
        <footer>
            <div @click="HandlePage">
                <Button />
            </div>
        </footer>
    </div>
</template>


<style scoped>
header,
section h1 {
    text-align: center;
    margin-top: 50px;
}

.cards {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

footer {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
</style>