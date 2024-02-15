import { Container, Title, SubTitle , Touchable, TouchableText} from "./layout";
import { Header } from "../../components/Header/Header";
import { useClientContext } from "../../Context/ClientContext";
import { useProductContext } from "../../Context/ProductContext";
import { useOrderContext } from "../../Context/OrderContext";
import { getclients } from "../../Services/Client-service";
import { getproducts } from "../../Services/Product-service";
import { getOrders } from "../../Services/Order-service";
import { useEffect } from "react";
import {Alert} from 'react-native';


export  const Home = ({navigation})=>{
    
    const {fetchclient} = useClientContext();
    const {fetchProduct } = useProductContext();
    const {fetchOrder  } = useOrderContext();
    useEffect(()=>{
        Alert.alert("CredApp" , "Carregando ...");
        try {
            const result = getclients();
            const loadProducts = getproducts();
            const loadOrders = getOrders();
            if(loadOrders){
                fetchOrder(loadOrders);
            }

            if(loadProducts){
                fetchProduct(loadProducts);
            }
            if(result){
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
    const callOrderCardsScreen = () => {
        navigation.navigate("OrderCards");
    }
    return(
    <>
            <Header></Header>
            
        <Container>
            <Title>Crediário Ferreira</Title>
            <SubTitle textSyze="35px">Escolha uma opção: </SubTitle>
            
            <Touchable key="Clients" onPress={()=>{callClientsScreen()}}>
                <TouchableText textSyze="40px">Cadastrar Cliente</TouchableText>
            </Touchable>
        
            <Touchable key="Products" onPress={()=>{callProductsScreen()}}>
                <TouchableText textSyze="40px">Cadastrar Produtos</TouchableText>
            </Touchable>
            <Touchable key="Order" onPress={()=>{callOrderScreen()}}>
                <TouchableText textSyze="40px">Lançar Ficha</TouchableText>
            </Touchable>

            <Touchable key="OrderCards" onPress={()=>{callOrderCardsScreen()}}>
                <TouchableText textSyze="40px">Consultar Fichas</TouchableText>
            </Touchable>
            
        </Container>
      
    </>
    
    );


}