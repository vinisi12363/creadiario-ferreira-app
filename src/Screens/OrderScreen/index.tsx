import { SafeAreaView, View, Text, TextInput  } from "react-native";
import { useOrderContext } from "../../Context/OrderContext";
import { Container, SubTitle , Title, Touchable, TouchableText} from "./layout";

export function OrderCardScreen() {
    const {orderCardData} = useOrderContext();

    return (
        <Container>
            <SafeAreaView>
                <View>
                    <Title textColor="white" textSize="40px">Informações da venda</Title>
                    <SubTitle textColor="white" textSize="20px">Nome do cliente: {orderCardData.clienteInfo.nome}</SubTitle>
                </View>
            </SafeAreaView>
        </Container>
    );


}