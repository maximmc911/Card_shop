import { ref } from "vue";
import axios from "axios";
import { URL_JSON_MATERIALS, openLoader } from "./url";

// constants
export const checkListMaterial = ref<number>(0);
export const checkListPrice = ref<number>(0);

export const select_price: Array<string | Array<materialItem>> = [
  `Сортировать по:`,
  [
    {
      id: 1,
      name: `Цена по возрастанию`,
    },
    {
      id: 2,
      name: `Цена по убыванию`,
    },
  ],
];
export const material_select = ref<Array<string | Array<materialItem>>>([
  `Материал`,
]);

// functions

// Ф-ция для получения данных по ассортименту материалов для select

export const getDataMaterials = async () => {
  openLoader.value = true;
  try {
    const { data } = await axios.get(URL_JSON_MATERIALS);
    material_select.value.push(data.record.materials);
    openLoader.value = false;
  } catch (error) {
    alert(`Сайт временно недоступен`);
  }
};
