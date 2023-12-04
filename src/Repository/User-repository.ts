import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { db } from "../Services/fireStore";
import { User } from "../Models/User";


export const postUser = async (user: User) => {
    const {nome , cpf, admin, funcionario} = user;
 

    try {
    const docRef = await addDoc(collection(db, "users"), {
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
        const result =  await getDocs(collection(db, "users"));    
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