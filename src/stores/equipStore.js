import { defineStore } from "pinia";

export const equipStore = defineStore("Equipment Store", {
  state: () => ({
    title: "Комплектация",
    slider: [
      {
        img: "https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/EquipmentSection%2Fshetka.png?alt=media&token=e33de9df-de3d-41fb-9120-61492ddb794e",
        name: "Жесткая щетка для выпрямления",
        txt: "Идеальная щетка для моментального выправления ваших волос.",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/EquipmentSection%2Fround-shetka.png?alt=media&token=472333b8-7529-4200-a027-d9dac27c28d7",
        name: "Круглая щетка для создания объема",
        txt: "Создайте объемные прически с легкостью, благодаря этой круглой щетке.",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/EquipmentSection%2Fnasatka.png?alt=media&token=f3c8e9cc-f886-4873-a719-a33876da0c48",
        name: "Насадка для сушки волос перед укладкой",
        txt: "Подготовьте ваши волосы к укладке с этой уникальной насадкой для предварительной сушки.",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/EquipmentSection%2F30-nasatka.png?alt=media&token=97ea58b2-747b-4b49-8189-1b74d442efdf",
        name: "30-мм цилиндрические насадки",
        txt: "Добавьте структурированные локоны с помощью цилиндрических насадок диаметром 30 мм.",
      },
      {
        img: "https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/EquipmentSection%2Fshetka.png?alt=media&token=e33de9df-de3d-41fb-9120-61492ddb794e",
        name: "Жесткая щетка для выпрямления",
        txt: "Идеальная щетка для моментального выправления ваших волос.",
      },
    ],
  }),
});
