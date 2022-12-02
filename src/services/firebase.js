import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBaYIFx3b0oTG2jfkqEGyyE0e0HiPaWufg",
  authDomain: "e-commerce-a-de-coco.firebaseapp.com",
  projectId: "e-commerce-a-de-coco",
  storageBucket: "e-commerce-a-de-coco.appspot.com",
  messagingSenderId: "569235133713",
  appId: "1:569235133713:web:3e57fec488b7b6ff4de8b0"
};

const fireBaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(fireBaseApp)

export const testDatabase = () =>{
  console.log(fireBaseApp)
}

export const getAllProducts = async () =>{
  const productCollection = collection(DB, "products");
  let snapShot = await getDocs(productCollection);
  const productsArray = snapShot.docs.map(product =>{
    return{
      ...product.data(),
      id: product.id,
    }
  })
 
  return productsArray
}

export const getSingleProduct = async (id) =>{
const docRef = doc(DB, "products", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return{
    ...docSnap.data(),
    id: docSnap.id,
  }
} else {
  // doc.data() will be undefined in this case
  console.log("No such product!");
}
}

export const getProductsByCategory = async (id) =>{
  const q = query(collection(DB, "products"), where("category", "==", id));

  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    return{
      ...doc.data(),
      id: doc.id,
    }
  });
  return products
}

export const createBuyOrderFireStore = async (OrderInfo) =>{
  const collectionRef = collection(DB, "buyOrders")
  const docRef = await addDoc(collectionRef, OrderInfo);
  return docRef.id;

}

export const exportItemsToFirestore = async () => {
  const products = [
    
    {
        id: 1,
        title: "AGUA DE COCO 100 % NATURAL",
        size: " 1 LITRO",
        price: 17850,
        stock: 5,
        category: "Aguas",
        images: ["/1.1.webp", "/1.2.webp"],
        description: "¡La favorita de los deportistas! El Agua de Coco A de Coco es 100% NATURAL, es obtenida a partir de cocos maduros, pasa por un proceso de filtración y ultrapasteurización garantizando eliminación de impurezas y microorganismos y conservación de sabor y propiedades nutricionales. Sin diluir, sin azúcar, saborizantes ni conservantes añadidos ¡Lo más parecido a abrir un coco y tomar su agua directamente!"
    },

    {
        id: 2,
        title: "AGUA DE COCO 100 % NATURAL",
        size: "330 ML",
        price: 7350,
        stock: 9,
        category: "Aguas",
        images: ["/2.1.webp", "/2.2.webp"],
        description: "¡La favorita de los deportistas de alto rendimiento! A de Coco es agua de coco pura y 100% NATURAL de cocos verdes, sin diluir, sin azúcar añadido, sin saborizantes artificiales ni conservantes. ¡Lo más parecido a abrir un coco y tomar su agua directamente!"
    },

    {
        id: 3,
        title: "ACEITE DE COCO VIRGEN",
        size: "300 ML",
        price: 38000,
        stock: 12,
        category: "Aceites",
        images: ["/3.1.webp", "/3.2.webp"],
        description: "Nuestro Aceite de Coco se denomina VIRGEN porque ha sido extraído mediante prensado en FRÍO sin ningún aditivo químico. Este método garantiza su pureza, mantiene sus propiedades y beneficios nutricionales."
    },

    {
        id: 4,
        title: "ACEITE DE COCO VIRGEN",
        size: "420 ML",
        price: 46200,
        stock: 7,
        category: "Aceites",
        images: ["/4.1.webp", "/4.2.webp"],
        description: "Nuestro Aceite de Coco se denomina VIRGEN porque ha sido extraído mediante prensado en FRÍO sin ningún aditivo químico. Este método garantiza su pureza, mantiene sus propiedades y beneficios nutricionales."
    },
    
    {
        id: 5,
        title: "BEBIDA DE COCO ORIGINAL",
        size: "1 LITRO",
        price: 16800,
        stock: 15,
        category: "Bebidas",
        images: ["/5.1.webp", "/5.2.webp"],
        description: "¡Sin lugar a duda una de las favoritas de nuestros #adecocolovers! Nuestra Bebida de Coco A de Coco también conocida como leche de coco es una alternativa natural, sin azúcares añadidos, sin lactosa, sin gluten, sin hormonas ni carragenina para reemplazar la leche de vaca. ¡La mejor bebida vegetal que encuentras en el mercado! ¡La única que tiene Agua de Coco! Seleccionamos los mejores cocos para ofrecer una bebida rica en ácidos grasos de cadena media (AGCM), calcio, vitaminas D y A. ¡Agítala muy bien antes de abrir!"
    },
    
    {
        id: 6,
        title: "BEBIDA DE COCO ORIGINAL",
        size: "330 ML",
        price: 7200,
        stock: 25,
        category: "Bebidas",
        images: ["/6.1.webp", "/6.2.webp"],
        description: "¡Sin lugar a duda una de las favoritas de nuestros #adecocolovers! Nuestra Bebida de Coco A de Coco también conocida como leche de coco es una alternativa natural, sin azúcares añadidos, sin lactosa, sin gluten, sin hormonas ni carragenina para reemplazar la leche de vaca. ¡La mejor bebida vegetal que encuentras en el mercado! ¡La única que tiene Agua de Coco! Seleccionamos los mejores cocos para ofrecer una bebida rica en ácidos grasos de cadena media (AGCM), calcio, vitaminas D y A. ¡Agítala muy bien antes de abrir!"
    },

    {
        id: 7,
        title: "AZÚCAR DE COCO ORGÁNICO",
        size: "200 GR",
        price: 26150,
        stock: 30,
        category: "Organicos",
        images: ["/7.1.webp", "/7.2.webp"],
        description: "Nuestro Azúcar de Coco ORGÁNICO es elaborado a partir de las flores de la palma del coco. Es un endulzante natural que aporta nutrientes. ¡Tiene un dulce sabor acaramelado y es exquisito para endulzar tus comidas!"
    },
    
    {
        id: 8,
        title: "COCO ORGÁNICO RALLADO SIN AZÚCAR",
        size: "150 GR",
        price: 10150,
        stock: 1,
        category: "Organicos",
        images: ["/8.1.webp", "/8.2.webp"],
        description: "Nuestro Coco ORGÁNICO se obtiene del rallado y secado lento de cocos orgánicos maduros seleccionados. Es 100% natural, rico en fibra, SIN AZÚCAR, sin conservantes ni saborizantes añadidos"
    },

    {
        id: 9,
        title: "BEBIDA DE COCO ORGÁNICO",
        size: "1 LITRO PACK X 3",
        price: 59550,
        stock: 10,
        category: "Packs",
        images: ["/9.webp"],
        description: "¡NUEVA bebida de coco ORGÁNICO! En nuestro producto cuidamos los cocos desde el campo hasta el producto final, evitando el uso de productos de síntesis química. Cuenta con Certificado orgánico USDA."
    },

    {
        id: 10,
        title: "ACEITE DE COCO ORGÁNICO VIRGEN",
        size: "420 ML PACK X 3",
        price: 176400,
        stock: 15,
        category: "Packs",
        images: ["/10.webp"],
        description: "Aceite de Coco Virgen prensado en frío de calidad premium con certificación ORGÁNICA, cultivado y procesado cumpliendo con todos los estándares que lo certifican como un producto 100% orgánico avalado por USDA y Bioagricert."
    },

    {
        id: 11,
        title: "COCO CHIPS NATURALES",
        size: "35 GR",
        price: 6750,
        stock: 35,
        category: "Snacks",
        images: ["/11.1.webp", "/11.2.webp"],
        description: "Nuestros Coco Chips son finas hojuelas de coco horneadas lentamente para que disfrutes el delicioso sabor del coco en cualquier momento. ¡Tiene alto contenido en fibra!"
    },

    {
        id: 12,
        title: "COCO CHIPS COCOA",
        size: "35 GR",
        price: 7300,
        stock: 2,
        category: "Snacks",
        images: ["/12.1.webp", "/12.2.webp"],
        description: "¡El delicioso sabor de nuestros COCO CHIPS ahora con COCOA! crujientes hojuelas de coco horneadas lentamente para que las disfrutes en cualquier momento como snack o topping para bowls, smoothies, frutas y yogur."
    },
    
]
const collectionRef = collection(DB, "products")
for(let product of products){
  const docRef = await addDoc(collectionRef, product);
  console.log("documen created with ID", docRef.id)
}


}