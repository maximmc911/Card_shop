import { defineStore } from "pinia";
import axios from "axios";
import { URL_JSON_ITEMS, openLoader } from "../data/url";
import { checkListMaterial, checkListPrice } from "../data/GetSelect";
export const useStore = defineStore("useStore", {
  state: () => {
    return {
      items: [] as itemCatalog[],
    };
  },
  actions: {
    async GetData() {
      openLoader.value = true;
      try {
        const { data } = await axios.get(URL_JSON_ITEMS);
        this.items.push(...data.record.items);
        openLoader.value = false;
      } catch (error) {
        alert(`Сайт временно недоступен`);
      }
    },
  },
  getters: {
    sortItems(): any {
      const newArrItems: Array<itemCatalog> = [];
      if (checkListMaterial.value == 0 && checkListPrice.value == 0) {
        return this.items.sort((a: any, b: any) => a.id - b.id);
      }
      if (checkListMaterial.value !== 0 && checkListPrice.value == 0) {
        newArrItems.push(
          ...this.items.filter(
            (el: { material: number }) => el.material == checkListMaterial.value
          )
        );
        return newArrItems.sort(
          (a: { id: any }, b: { id: any }) => a.id - b.id
        );
      }
      if (checkListPrice.value == 1) {
        newArrItems.push(
          ...this.items.sort(
            (a, b) => a.price.current_price - b.price.current_price
          )
        );
        if (checkListMaterial.value > 0) {
          return newArrItems.filter(
            (el: { material: number }) => el.material == checkListMaterial.value
          );
        }
        return newArrItems;
      }
      if (checkListPrice.value == 2) {
        newArrItems.push(
          ...this.items.sort(
            (a, b) => b.price.current_price - a.price.current_price
          )
        );
        if (checkListMaterial.value > 0) {
          return newArrItems.filter(
            (el: { material: number }) => el.material == checkListMaterial.value
          );
        }
        return newArrItems;
      }
    },
  },
});
