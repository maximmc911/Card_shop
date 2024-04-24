import { ref } from "vue";

// URL адреса к Json файлам
export const URL_JSON_ITEMS: string = `https://api.jsonbin.io/v3/b/6628ada9e41b4d34e4e94811`;
export const URL_JSON_MATERIALS: string = `https://api.jsonbin.io/v3/b/6628ab2ce41b4d34e4e94748`;

// Запуск лоадера при загрузке данных
export const openLoader = ref<boolean>(false);
