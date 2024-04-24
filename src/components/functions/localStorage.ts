// Ф-ция для сохранения данных в LocalStorage

export const workLocalStorage = (
  key: string,
  action: boolean,
  element: itemCatalog
): void => {
  const data: Array<itemCatalog> = [];

  if (action) {
    if (localStorage.getItem(key) == null) {
      data.push(element);
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      if (localStorage.getItem(key) !== null) {
        const dataLocalStorage: string | any = localStorage.getItem(key);
        data.push(...JSON.parse(dataLocalStorage));
        data.push(element);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(data));
      }
    }
  }
  if (!action) {
    if (localStorage.getItem(key) !== null) {
      const dataLocalStorage: string | any = localStorage.getItem(key);
      data.push(...JSON.parse(dataLocalStorage));
      const updateData = data.filter((el) => el.id !== element.id);
      localStorage.removeItem(key);
      if (updateData.length !== 0) {
        localStorage.setItem(key, JSON.stringify(updateData));
      }
    }
  }
};

// Ф-ция для получения и проверки наличия элемента в LocalStorage

export const getItemLocalStorage = (
  key: string,
  element: itemCatalog
): boolean => {
  let check: boolean = false;
  if (localStorage.getItem(key) == null) {
    check = false;
  } else {
    const dataLocalStorage: string | any = localStorage.getItem(key);
    if (
      JSON.parse(dataLocalStorage).find(
        (el: { id: number | string }) => el.id == element.id
      ) !== undefined
    ) {
      check = true;
    }
  }

  return check;
};
