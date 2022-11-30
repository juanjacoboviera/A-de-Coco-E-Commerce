import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from 'firebase/firestore'
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

