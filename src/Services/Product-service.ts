import * as productRepo from '../Repository/Product-repository';
import {Alert} from 'react-native';


export const postproduct = async (product) => {
    
    try {
        return await productRepo.postProduct(product);
    } catch (error) {
        Alert.alert("Erro ao adicionar produto", "Verifique os dados e tente novamente");
        throw error;
    }

}


export const getproducts = async () => {
    try {
        return await productRepo.getProducts();
    } catch (error) {
        throw error;
    }
}

