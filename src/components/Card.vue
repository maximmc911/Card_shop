<script setup lang='ts'>
import { ref } from 'vue';
import { UpdatePrice, UpdateText, formatCurrency } from './functions/index'
import { getItemLocalStorage, workLocalStorage } from './functions/localStorage';

// constants 

const props: Prop | any = defineProps({
    props: {
        type: Object,
        required: true,
    }
})

const pushFavorite = ref(getItemLocalStorage(`favorite`, props.props));
const pushBasket = ref(getItemLocalStorage(`basket`, props.props));

//cycle & condition

if (!props?.props?.image.url.includes(`../../src/components/image`)) {

    props.props.image.url = `../../src/components/image${props?.props?.image.url}`;
}

// functions

const HandlePushFavorite = (): void => {
    pushFavorite.value = !pushFavorite.value;
    workLocalStorage(`favorite`, pushFavorite.value, props.props)
}
const HandlePushBasket = (): void => {
    pushBasket.value = !pushBasket.value;
    workLocalStorage(`basket`, pushBasket.value, props.props)
}
</script>
<template>

    <div class="card">
        <header class="sale" v-if="props?.props?.price.old_price !== null">

            <p>Скидка</p>

        </header>
        <div v-if="props?.props?.price.old_price == null" style="margin-top: 28px;"></div>
        <section class="image">
            <img :src="props.props.image.url" alt="logo" v-if="props?.props?.image?.url !== null">
            <img src="./image/nophoto.jpg" alt="logo" v-else>
        </section>
        <section class="name_card">
            <p class="name_card__article">{{ props?.props?.code }}</p>
            <p v-if="props?.props?.code == null" style="margin-top: 10px;"></p>
            <p class="name_card__name">{{ UpdateText(props?.props?.name) }}</p>
        </section>
        <footer>
            <div class="price">
                <p class="price__old_price" v-if="props?.props?.price.old_price !== null"> {{
                    formatCurrency(UpdatePrice(Number(props?.props?.price.old_price))) }} &#8381;</p>
                <p class="price__new_price">{{ formatCurrency(UpdatePrice(Number(props?.props?.price.current_price))) }}
                    &#8381;</p>
            </div>
            <div class="icon">
                <div @click="HandlePushBasket" v-if="!pushBasket">

                    <img src="./image/icon/shop.svg" alt="">
                </div>
                <div @click="HandlePushBasket" v-else="pushBasket">

                    <img src="./image/icon/pay.svg" alt="">
                </div>
                <div @click="HandlePushFavorite" v-if="!pushFavorite">
                    <v-icon name="bi-heart" color="black" scale="1.2" />
                </div>
                <div @click="HandlePushFavorite" v-else>
                    <v-icon name="bi-heart-fill" color="red" scale="1.2" />
                </div>

            </div>
        </footer>
    </div>
</template>


<style scoped>
.card {
    width: 250px;
    height: 320px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    border: 1px solid rgba(238, 238, 238, 1);
    background: rgba(255, 255, 255, 1);

}

.sale {
    width: 56px;
    display: flex;
    justify-content: center;
    height: 18px;
    margin-top: 10px;
    background: rgba(235, 87, 87, 1);
}

.sale p {
    color: rgba(255, 255, 255, 1);
    font-family: 'SF Pro Display';
    font-size: 14px;
    font-weight: 500;
    line-height: 18.2px;
    letter-spacing: 0.01em;
}

.image {
    display: flex;
    justify-content: center;
}

.image img {
    width: 200px;
}

.name_card {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.name_card__article {
    font-family: 'SF UI Text';
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: rgba(136, 136, 136, 1);
}

.name_card__name {
    font-family: 'SF UI Text';
    font-size: 20px;
    font-weight: 500;
    line-height: 22.4px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 1);
}

footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 6px 12px;
}

footer .price {
    display: flex;
    gap: 5px;
}

.price__old_price {
    font-family: 'SF UI Text';
    font-size: 18px;
    font-weight: 400;
    line-height: 22.4px;
    letter-spacing: 0.02em;
    color: rgba(136, 136, 136, 1);
    text-decoration: line-through;
}

.price__new_price {
    font-family: 'SF UI Text';
    font-size: 18px;
    font-weight: 400;
    line-height: 22.4px;
    letter-spacing: 0.02em;
    color: rgba(0, 0, 0, 1);
}

footer .icon {
    display: flex;
    gap: 10px;
    align-items: center;
}

footer .icon img {
    width: 19px;
    height: 19px;
    cursor: pointer;
}
</style>