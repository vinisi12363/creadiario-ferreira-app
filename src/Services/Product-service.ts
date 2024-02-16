import * as productRepo from '../Repository/Product-repository';
import {Alert} from 'react-native';


 const postProduct = async (product) => {
    
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

 const updateStock = async (product) => {
    try {
        await productRepo.downStock(product);
    } catch (error) {
        throw error;
    }

}

const getproducts = async () => {
    try {
        return await productRepo.getProducts();
    } catch (error) {
        throw error;
    }
}

export const productServices = {
    postProduct,
    updateStock,
    getproducts
}

