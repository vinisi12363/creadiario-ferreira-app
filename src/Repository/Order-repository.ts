import { collection, getDocs, addDoc, query , where } from "firebase/firestore"; 
import { db } from "../Services/fireStore";


const OrdersCollection = collection(db, "Orders");

export type Order = {
    cliente: { id:string, nome:string, endereco:string },
    produto: { id:string , nome:string, valor:number },
    valueOfOrder:number,
    data:string,
    parcelas:string,
    metodoPagamento:string,

}

export const postOrder= async (order : Order) => {
    try {
        const docRef = await addDoc(OrdersCollection, {
            nomeCliente : order.cliente.nome,
            enderecoCliente: order.cliente.endereco,
            idCliente: order.cliente.id,
            nomeProduto: order.produto.nome,
            valorProduto: order.produto.valor,
            idProduto: order.produto.id,
            valorTotal: order.valueOfOrder,
            dataDaVenda: order.data,
            parcelas: order.parcelas,
            metodoPagamento: order.metodoPagamento,
        
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

export const getOrdersByOrderId = async (orderId:string)=>{
    try {
        const q = query(OrdersCollection, where("id", "==", orderId));
        const result = await getDocs(q);
        let data = [];
        result.forEach((doc) => {
            console.log(`Order id => ${doc.id}`);
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