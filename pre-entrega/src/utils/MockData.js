export const products = [
  {
    id: 1,
    name: "Calvin Klein: Ck Bd EDT 100ml",
    description:
      "Calvin Klein CK Be Eau de Toilette fue diseñado para hacer una declaración: Sé tú mismo, sé audaz. Una fragancia unisex que te atrae.",
    price: "78.000",
    category: "perfumes",
    image:
      "https://rougeb2car.vtexassets.com/arquivos/ids/189687-800-auto?v=637952366303300000&width=800&height=auto&aspect=true",
  },
  {
    id: 2,
    name: "Givenchy: Gentleman EDP 50ml ",
    description:
      "La composición apuesta por un ritmo explosivo desde las primeras notas, con un primer paso suave y aromático sublimado por la lavanda sobre un aire de efervescencia marcado por la pimienta.",
    price: "122.000",
    category: "perfumes",
    image:
      "https://stylewatch.vtexassets.com/arquivos/ids/245714-800-800?v=638459438581700000&width=800&height=800&aspect=true",
  },
  {
    id: 3,
    name: "Carolina Herrera: Bad Boy EDP 150ml",
    description:
      "BAD BOY Le Parfum redefine el icónico aroma BAD BOY con una fórmula novedosa, electrizante y más atrevida que nunca. Sin complejos, auténtico y misterioso, este perfume demuestra que las reglas están hechasa para romperlas con su sorpresiva mezcla de cáñamo y cuero.",
    price: "220.000",
    category: "perfumes",
    image:
      "https://rougeb2car.vtexassets.com/arquivos/ids/213333-800-auto?v=638490583435730000&width=800&height=auto&aspect=true",
  },
  {
    id: 4,
    name: "Rabanne: Invictus Victory EDP 50ml",
    description:
      "La eau de parfum extrema Invictus Victory de Paco Rabanne provoca un auténtico choque de sentidos. En este intenso duelo, dos fuerzas se desafían: frescura y sensualidad. ",
    price: "136.000",
    category: "perfumes",
    image:
      "https://simplicityar.vtexassets.com/arquivos/ids/170276-800-auto?v=638294469466770000&width=800&height=auto&aspect=true",
  },
  {
    id: 5,
    name: "Dior: Sauvage EDP 100ml",
    description:
      "Sauvage Eau de Parfum combina la frescura de una jugosa y especiada nota de bergamota de Calabria con la sensualidad de un misterioso y envolvente acorde de extracto de vainilla de Papúa Nueva Guinea. La fragancia despliega así una estela poderosa y noble.",
    price: "194.000",
    category: "perfumes",
    image:
      "https://rougeb2car.vtexassets.com/arquivos/ids/183721-800-auto?v=637824632649930000&width=800&height=auto&aspect=true",
  },
  {
    id: 1001,
    name: "Dermaglos: crema corporal",
    description:
      "La Crema Corporal Hidratación Profunda deja la piel suave, elástica y saludable. Su exclusiva formulación mantiene el equilibrio celular, mejorando el nivel de hidratación de la piel, gracias a la acción equilibrada de sus componentes. ",
    price: "9.000",
    category: "cremas",
    image:
      "https://farmaciaspatagonicasar.vtexassets.com/arquivos/ids/165761/fxs.jpg?v=638394738384770000",
  },
  {
    id: 1002,
    name: "Cicatricure: crema facial Gold Lift dia",
    description:
      "Cicatricure Gold Lift Crema de día tiene una textura ligera de rápida absorción. Su fórmula combina peptidos con oro, calcio y silicio para reducir arrugas gravitacionales en 6 semanas.",
    price: "17.000",
    category: "cremas",
    image:
      "https://simplicityar.vtexassets.com/arquivos/ids/159339-800-auto?v=638205499522770000&width=800&height=auto&aspect=true",
  },
  {
    id: 1003,
    name: "Pond's: crema facial humectante",
    description:
      "Especialmente formulada con una mezcla de extractos y nutrientes botánicos naturales, la crema Nutritiva Humectante Pond's Crema S nutre tu piel desde adentro hasta por 48 horas para que esté suave y saludable. ",
    price: "2.800",
    category: "cremas",
    image:
      "https://perfugroupar.vtexassets.com/arquivos/ids/197722-800-auto?v=638409345613070000&width=800&height=auto&aspect=true",
  },
  {
    id: 1004,
    name: "L'oreal Paris: Crema Facial Noche",
    description:
      "La Crema Revitalift de noche, formulada con ácido hialurónico, hidrata profundamente, hasta el punto de rellenar las líneas de expresión. Tras solo un día de aplicación, la piel se siente más hidratada y suave. ",
    price: "14.950",
    category: "cremas",
    image:
      "https://perfugroupar.vtexassets.com/arquivos/ids/187687-800-auto?v=638198451675330000&width=800&height=auto&aspect=true",
  },
  {
    id: 1005,
    name: "Nivea: Crema Revitalizante Antiarrugas",
    description:
      "La Crema facial revitalizante NIVEA Antiarrugas 45+ proporciona firmeza, gracias al Aceite de Semillas de Damasco; previene el envejecimiento por su ingrediente antiedad; y filtros UV que la protegen contra el sol. ",
    price: "11.750",
    category: "cremas",
    image:
      "https://perfugroupar.vtexassets.com/arquivos/ids/202699-800-auto?v=638491530813200000&width=800&height=auto&aspect=true",
  },
];

/*export const getProducts = () => {
  return fetch(products).then((res) => res.json());
};*/

/*export const setProduct = () => {
  return fetch(products).then((res) => res.json());
};*/

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      reject("No se pueden traer los productos");
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (elem) => elem.category === categoryId
      );

      resolve(filteredProducts);
      reject("No hay stock de productos");
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((elem) => elem.id == parseInt(productId));

      resolve(product);
      reject("No hay stock de productos");
      //reject("No se pudo traer los productos");
    }, 1000);
  });
};
