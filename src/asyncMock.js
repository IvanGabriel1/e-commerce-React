const products = [
  {
    id: "1",
    name: "Remera Lisa",
    price: 15000,
    category: "Remeras",
    img: "https://i.pinimg.com/originals/91/88/ac/9188ac1cae4d3d1fa088c6d94375d118.jpg",
    stock: 15,
    description: "Remera clasica lisa color negro",
  },
  {
    id: "2",
    name: "Pantalon Jean",
    price: 45000,
    category: "Pantalones",
    img: "https://4.bp.blogspot.com/-nGvwZlq-oVo/WgxPvGqAQbI/AAAAAAAHo0o/d2UDP3W1vkksWg2lyIbRrVGXc5p6t_uGwCLcBGAs/s1600/13-jeans-png-image.png",
    stock: 10,
    description: "Jean azul hombre",
  },
  {
    id: "3",
    name: "Zapatillas Negras Pumba",
    price: 50000,
    category: "Zapatillas",
    img: "https://falabella.scene7.com/is/image/Falabella/7402067_1?wid=800&hei=800&qlt=70",
    stock: 5,
    description: "Zapatillas negras pumba",
  },
  {
    id: "4",
    name: "Remera Negra Pumba",
    price: 17000,
    category: "Remeras",
    img: "https://http2.mlstatic.com/D_NQ_NP_888771-MLA40717604965_022020-O.webp",
    stock: 8,
    description: "Remera negra estampada Pumba",
  },
  {
    id: "5",
    name: "Zapatillas Blancas Botita Pumba",
    price: 55000,
    category: "Zapatillas",
    img: "https://pbs.twimg.com/media/FCuDsSZXsAcq-my.jpg",
    stock: 8,
    description: "Remera negra estampada Pumba",
  },
  {
    id: "6",
    name: "Remera Estampada Timon y Pumba",
    price: 17000,
    category: "Remeras",
    img: "https://i.pinimg.com/originals/26/1f/bb/261fbbe9b7c66f976b379dd846c8edea.jpg",
    stock: 8,
    description: "Remera Estampada De timon y pumba",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};