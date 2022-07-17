import { Product } from "./models/Product";

type Database = {
  products: Product[];
};

export const db: Database = {
  products: [
    {
      id: 1,
      title: "Tarantulace",
      description: "Tarantulace Climbing Shoes - Men's",
      imgSrc:
        "https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg",
      price: 89,
      count: 1,
    },
    {
      id: 2,
      title: "Zone",
      description: "Zone Climbing Shoes",
      imgSrc:
        "https://www.rei.com/media/e4dde7ff-5ec3-40b1-8c7b-294144b00bbb.jpg",
      price: 87.73,
      count: 2,
    },
    {
      id: 3,
      title: "Zenit",
      description: "Zenit Climbing Shoes - Men's",
      imgSrc:
        "https://www.rei.com/media/b4a73eab-39ba-48bb-b431-b7fbcac67a0a.jpg",
      price: 98.5,
      count: 3,
    },
    {
      id: 4,
      title: "Momentum",
      description: "Momentum Climbing Shoes - Men's",
      imgSrc:
        "https://www.rei.com/media/28822d1d-f908-422f-9a4c-bc495bc77df7.jpg",
      price: 102.5,
      count: 4,
    },
    {
      id: 5,
      title: "Tarantulace",
      description: "Tarantulace Climbing Shoes - Women's",
      imgSrc:
        "https://www.rei.com/media/e554acd9-4249-41a2-83a8-a65fee4cb219.jpg",
      price: 66.67,
      count: 5,
    },
    {
      id: 6,
      title: "Instinct",
      description: "Instinct VS Climbing Shoes - Men's",
      imgSrc:
        "https://www.rei.com/media/99049658-d779-431e-8353-fda5751f9e3f.jpg",
      price: 75,
      count: 6,
    },
  ],
};
