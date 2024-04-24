interface materialItem {
  section?: number;
  id?: number;
  name: string;
}
interface itemCatalog {
  id: string | number;
  name: string;
  code: string;
  price: {
    old_price: number;
    current_price: number;
  };
  image: {
    url: string;
  };
  material: number;
}
interface router {
  id: number;
  href: string;
  name: string;
}
interface Prop {
  props: itemCatalog;
}
