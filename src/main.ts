import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiHeart } from "oh-vue-icons/icons";
import { BiHeartFill } from "oh-vue-icons/icons";
addIcons(BiHeart, BiHeartFill);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.mount("#app");
