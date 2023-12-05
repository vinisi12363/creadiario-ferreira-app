import { collection, getDocs, addDoc, query , where } from "firebase/firestore"; 
import { db } from "../Services/fireStore";


const clientsCollection = collection(db, "clients");

export const postClient = async (client) => {
    const {nome , cpf, endereco, telefone} = client;
 

    try {
    const docRef = await addDoc(clientsCollection, {
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

export const getclients = async ()=>{
        console.log("GET CLIENTS")
        const result =  await getDocs(clientsCollection);    
         let data = [];
        result.forEach((doc) => {
        
        console.log(`${doc.id} => nome: ${doc.data().nome} endereco: ${doc.data().endereco}`);
         const clientdata = {
            docId:doc.id,
            nome: doc.data().nome,
            endereco: doc.data().endereco,
            telefone: doc.data().telefone,
        }
        data.push(clientdata);
        
        })
        return data;
} 