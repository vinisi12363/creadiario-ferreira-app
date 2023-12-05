import { collection, getDocs, addDoc, query , where } from "firebase/firestore"; 
import { db } from "../Services/fireStore";


const OrdersCollection = collection(db, "Orders");

export const postOrder = async (order) => {
    const {nome , cpf, endereco, telefone} = order;
 

    try {
    const docRef = await addDoc(OrdersCollection, {
        nome : nome,
        cpf: cpf,
        endereco: endereco,
        telefone: telefone
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

export const getOrders = async ()=>{
        console.log("GET Orders")
        const result =  await getDocs(OrdersCollection);    
         let data = [];
        result.forEach((doc) => {
        
        console.log(`${doc.id} => nome: ${doc.data().nome} endereco: ${doc.data().endereco}`);
         const Orderdata = {
            docId:doc.id,
            nome: doc.data().nome,
            endereco: doc.data().endereco,
            telefone: doc.data().telefone,
        }
        data.push(Orderdata);
        
        })
        return data;
} 