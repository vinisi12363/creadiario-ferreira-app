import { Container, Title, SubTitle , Touchable, TouchableText} from "./layout";
import { Header } from "../../components/Header/Header";
import { useClientContext } from "../../Context/ClientContext";
import { getclients } from "../../Services/Client-service";
import { useEffect } from "react";


export  const Home = ({navigation})=>{
    
    const {client,fetchclient} = useClientContext();
    useEffect(()=>{
        try {
            const result = getclients();
            if(result){
                console.log("CLIENTS",result);
                fetchclient(result);
            }
        } catch (error) {
            
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