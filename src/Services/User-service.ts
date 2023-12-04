import * as UserRepo from '../Repository/User-repository';
import { User } from '../Models/User';
import {Alert} from 'react-native';


export const postUser = async (user:User) => {
    
    try {
        const result = await UserRepo.postUser(user);
        return result;
    } catch (error) {
        throw error;
    }

}


export const getUser = async () => {
    try {
        const user = await UserRepo.getUsers();
        console.log("QUERY ON USER SERVICE", user)
        return user;
    } catch (error) {
        throw error;
    }
}

export const getUserByCpf = async (cpf: string) => {
        
        try {
            const result = await UserRepo.getUserByCPf(cpf);
            
            if(!result)
            Alert.alert("ATENÇÃO: Erro ao buscar usuário", "CPF incorreto ou usuário não encontrado");
            return result;
           
        } catch (error) {
            Alert.alert("ATENÇÃO: Erro ao buscar usuário", "CPF incorreto ou usuário não encontrado");
        }

}