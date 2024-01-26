import { Container ,  Title, SubTitle  } from "./layout";
import { View } from "react-native";
import { Header } from "../../components/Header/Header";
import { useOrderContext } from "../../Context/OrderContext";
import { getOrders } from "../../Services/Order-service";
import { useEffect } from "react";

export const OrderCards = ({navigation})=>{


    const {order} = useOrderContext();
    console.log("oRDERS LOADED",order);

    const callOrderScreen = () => {
        navigation.navigate("Order");
    }
    return(
    
    <>
       
            
        <Container>
        {order? (
            order._j.map((o) => {

                return (
                    <View key={o.id}>
                       <SubTitle>{` nome: ${o.clienteInfo.nome}`}</SubTitle>
                       <SubTitle>{`endereço: ${o.clienteInfo.endereco}`}</SubTitle>
                       <SubTitle>{`valor devido: R$ ${o.valorDaFicha},00`}</SubTitle>
                       <SubTitle>{`data da venda: ${o.dataDaVenda}`}</SubTitle>
                    </View>
                )
            })
         ) : <SubTitle>Não há fichas cadastradas</SubTitle>}

        </Container>

    </>
    );
}