import { Container, Title, SubTitle , Touchable, TouchableText} from "./layout";
import { Text } from "react-native";
import {View} from 'react-native';


export  const Home = ({navigation})=>{
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
    );


}