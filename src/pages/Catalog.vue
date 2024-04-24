<script setup lang='ts'>
import Card from '../components/Card.vue';
import Breadcrumb from '../components/UI/breadcrumb/Breadcrumb.vue';
import SelectUser from '../components/UI/select/Select.vue';
import { checkListMaterial, checkListPrice, material_select, select_price } from '../data/GetSelect'
import { useStore } from '../store/store';

// constants 
const store = useStore();
const emit = defineEmits();

// functions

const toggle = (e: materialItem): void => {
    if (e.name == select_price[0]) {
        checkListPrice.value = Number(e.section);
    }
    if (e.name == material_select.value[0]) {
        checkListMaterial.value = Number(e.section);
    }
};

const HandlePage = (e: boolean): void => {
    if (e) {
        emit(`router`, `favorites`);
    } else {
        emit(`router`, `basket`);
    }
}



</script>
<template>
    <div>
        <div class="container">
            <nav>
                <Breadcrumb />
            </nav>
            <header>
                <h1>Комплекты стеллажных систем</h1>
                <div class="header__menu">
                    <p @click="HandlePage(true)">Избранное</p>
                    <p @click="HandlePage(false)">Корзина</p>
                </div>
            </header>
            <section class="select_group">
                <SelectUser :props="select_price" @toggle="toggle" />
                <SelectUser :props="material_select" @toggle="toggle" />
            </section>
            <section class="cards">
                <div v-for="item in store.sortItems" :key="item.id">
                    <Card :props="item" />
                </div>
            </section>
        </div>
    </div>
</template>



<style scoped>
.container {
    margin: 30px;
}

header {
    display: flex;
    justify-content: space-between;
}

header h1 {
    font-family: 'SF UI Text';
    font-size: 36px;
    font-weight: 600;
    line-height: 48px;
}

.header__menu {
    display: flex;
    gap: 30px;
}

.header__menu p {
    cursor: pointer;
}

.select_group {
    margin-top: 30px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.cards {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

@media (max-width:1000px) {
    header {
        flex-wrap: wrap;
        gap: 20px;
    }

}

@media (max-width:450px) {
    header h1 {
        font-family: 'SF UI Text';
        font-size: 24px;
        font-weight: 600;
        line-height: 48px;
    }

    .cards,
    header,
    .select_group {
        justify-content: center;
    }
}
</style>