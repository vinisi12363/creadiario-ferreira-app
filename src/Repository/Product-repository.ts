import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { db } from "../Services/fireStore";

const productsCollection = collection(db, "produtos");

export const postProduct = async (Product) => {
  const { nome, quant , valor } = Product;
  console.log("nome", nome, "estoque",  quant , valor);

  try {
    const docRef = await addDoc(productsCollection, {
      nome: nome,
      quant: quant,
      valor: valor
    });

    console.log("Document written with ID: ", docRef.id);

   return {prod_id: docRef.id};
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getProducts = async () => {
  const result = await getDocs(productsCollection);
  let data = [];
  result.forEach((doc) => {
    console.log(
      `${doc.id} => nome: ${doc.data().nome} valor: ${doc.data().valor}`
    );
    const Productdata = {
      docId: doc.id,
      nome: doc.data().nome,
      valor: doc.data().valor,
      estoque: doc.data().estoque,
    };
    data.push(Productdata);
  });
  return data;
};
