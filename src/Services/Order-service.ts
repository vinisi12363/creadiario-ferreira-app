import * as OrderRepo from '../Repository/Order-repository';
import {Alert} from 'react-native';


export const postOrder = async (Order) => {
    
    try {
        return await OrderRepo.postOrder(Order);
    } catch (error) {
        Alert.alert("Erro ao adicionar ficha de venda", "Verifique os dados e tente novamente");
        throw error;
    }

}


export const getOrders = async () => {
    try {
        return await OrderRepo.getOrders();
    } catch (error) {
        throw error;
    }
}

