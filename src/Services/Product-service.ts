import * as productRepo from '../Repository/Product-repository';
import {Alert} from 'react-native';


export const postProduct = async (product) => {
    
    try {
        const { prod_id } =   await productRepo.postProduct(product);
        if(prod_id)
            Alert.alert("Sucesso" , " Produto cadastrado com sucesso! ");
        return prod_id;
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

