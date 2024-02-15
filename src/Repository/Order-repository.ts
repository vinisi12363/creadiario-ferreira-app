import { collection, getDocs, addDoc, query , where } from "firebase/firestore"; 
import { db } from "../Services/fireStore";
import { Order, OrderPost } from "../Models/Order";

const OrdersCollection = collection(db, "Orders");

export const postOrder= async (order : OrderPost) => {

    try {
        const docRef = await addDoc(OrdersCollection, {
            order
        
    });

  
    return docRef.id;
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

export const getOrders = async ()=>{
       
        const result =  await getDocs(OrdersCollection);    
         let data = [];
        
        result.forEach((doc) => {
         const Orderdata:Order = {
            dataDaVenda: doc.data().order.dataDaVenda,
            datasVencimento: doc.data().order.datasVencimento,
            orderId: doc.data().order.docId,
            clienteInfo: doc.data().order.clienteInfo,
            products: doc.data().order.products,
            valorDaFicha: doc.data().order.valorDaFicha,
            parcelas: doc.data().order.parcelas,
            metodoPagamento: doc.data().order.metodoPagamento,
        }

        data.push(Orderdata);
        })
        return data;
} 

export const getOrdersByOrderId = async (orderId:string)=>{
    try {
        const q = query(OrdersCollection, where("id", "==", orderId));
        const result = await getDocs(q);
        let data = [];
        result.forEach((doc) => {
         
            const Orderdata = {
                docId:doc.id,
               
            }
            data.push(Orderdata);
        })
        return data;
    }catch (error) {
        console.log(error);
        return null;

    }

}