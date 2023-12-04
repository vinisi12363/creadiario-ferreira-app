import { collection, getDocs, addDoc, query , where } from "firebase/firestore"; 
import { db } from "../Services/fireStore";
import { User } from "../Models/User";

const usersCollection = collection(db, "users");

export const postUser = async (user: User) => {
    const {nome , cpf, admin, funcionario} = user;
 

    try {
    const docRef = await addDoc(usersCollection, {
        nome : nome,
        cpf: cpf,
        admin: false,
        funcionario: true
    });

    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}

export const getUsers = async ()=>{
        const result =  await getDocs(usersCollection);    
         let data = [];
        result.forEach((doc) => {
        
        console.log(`${doc.id} => nome: ${doc.data().nome} admin: ${doc.data().admin}`);
         const userdata = {
            docId:doc.id,
            nome: doc.data().nome,
            admin: doc.data().admin,
            funcionario: doc.data().funcionario,
        }
        data.push(userdata);
        
        })
        return data;
} 

export const getUserByCPf = async (cpf: string) => {
        try {
            const cpfQuery  = query(usersCollection, where("cpf", "==", cpf));
            const result = await getDocs(cpfQuery);
            return {
                    nome: result.docs[0].data().nome, 
                    cpf: result.docs[0].data().cpf,
                    admin: result.docs[0].data().admin,
                    funcionario: result.docs[0].data().funcionario
                  };
        } catch (error) {
            return null;
        }
       
}