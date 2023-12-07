import { Container, Title, SubTitle , Touchable, TouchableText} from "./layout";
import { Header } from "../../components/Header/Header";
import { useClientContext } from "../../Context/ClientContext";
import { useProductContext } from "../../Context/ProductContext";
import { getclients } from "../../Services/Client-service";
import { getproducts } from "../../Services/Product-service";
import { useEffect } from "react";
import {Alert} from 'react-native';


export  const Home = ({navigation})=>{
    
    const {client,fetchclient} = useClientContext();
    const {fetchProduct } = useProductContext();
    useEffect(()=>{
        try {
            const result = getclients();
            const loadProducts = getproducts();
            if(loadProducts){
                fetchProduct(loadProducts);
            }
            if(result){
                console.log("CLIENTS",result);
                fetchclient(result);
            }
        } catch (error) {
            Alert.alert("Erro" , "Houve um erro ao carregar os clientes, ou produtos!");
        }

    },[]);
    
    const callClientsScreen = () => {
        navigation.navigate("Clients");
    }
    const callProductsScreen = () => {
        navigation.navigate("Products");
    }
    const callOrderScreen = () => {
        navigation.navigate("Order");
    }
    return(
    <>
            <Header></Header>
            
        <Container>
            <Title>Crediário Ferreira</Title>
            <SubTitle>Escolha uma opção: </SubTitle>
            
            <Touchable key="Clients" onPress={()=>{callClientsScreen()}}>
                <TouchableText >Cadastrar Cliente</TouchableText>
            </Touchable>
        
            <Touchable key="Products" onPress={()=>{callProductsScreen()}}>
                <TouchableText>Cadastrar Produtos</TouchableText>
            </Touchable>
            <Touchable key="Order" onPress={()=>{callOrderScreen()}}>
                <TouchableText>Lançar Ficha</TouchableText>
            </Touchable>
        </Container>

    </>
    
    );


}