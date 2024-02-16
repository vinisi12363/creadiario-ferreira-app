import { collection, getDocs, addDoc, query, where, updateDoc , doc} from "firebase/firestore";
import { db } from "../Services/fireStore";

const productsCollection = collection(db, "produtos");

export const postProduct = async (Product) => {
  const { nome, quant , valor } = Product;


  try {
    const docRef = await addDoc(productsCollection, {
      nome: nome,
      quant: quant,
      valor: valor
    });

  

   return {prod_id: docRef.id};
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const downStock = async (Product) => {
  const {docId, quantidade} = Product;
  console.log ("docid, quant", docId , quantidade);
  const updateProd = doc(db, "produtos", docId);
  try {
    const result = await updateDoc(updateProd, {quant : quantidade - 1})
    console.log ("update result", result);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

export const getProducts = async () => {
  const result = await getDocs(productsCollection);
  let data = [];
  result.forEach((doc) => {
 
    const Productdata = {
      docId: doc.id,
      nome: doc.data().nome,
      valor: doc.data().valor,
      quantidade: doc.data().quant,
    };
    data.push(Productdata);
  });
  return data;
};