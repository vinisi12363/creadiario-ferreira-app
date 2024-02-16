import { SubTitle, Touchable, Title, FilterButton, FilterArea } from "./layout";
import { useOrderContext } from "../../Context/OrderContext";
import { SafeAreaView, FlatList } from "react-native";
import { Order } from "../../Models/Order";
import { useState } from "react";
import { Container } from "./layout";

type ItemProps = {
  item: Order;
  navigation: any;
  chooseOrderCard: (orderData: any) => void;
};

const Item = ({ item, navigation, chooseOrderCard }: ItemProps) => {
  return (
    <Touchable
      key={item.orderId}
      onPress={() => {
        chooseOrderCard(item), navigation.navigate("OrderCardScreen");
      }}
    >
      <SubTitle
        textSize="25px"
        textColor="purple"
      >{`data da venda: ${item.dataDaVenda}`}</SubTitle>
      <SubTitle
        textSize="25px"
        textColor="black"
      >{` nome do cliente: ${item.clienteInfo.nome}`}</SubTitle>
      <SubTitle
        textSize="25px"
        textColor="black"
      >{`endereço: ${item.clienteInfo.endereco}`}</SubTitle>
      <SubTitle
        textSize="25px"
        textColor="black"
      >{`valor devido: R$ ${item.valorDaFicha},00`}</SubTitle>
    </Touchable>
  );
};

export const OrderCards = ({ navigation }) => {
  const { order, chooseOrderCard } = useOrderContext();
  const [filteredOrder, setFilteredOrder] = useState<Order[]>(order._j);
  const [btnDataPressed, setBtnDataPressed] = useState(false);
  const [btnAddressPressed, setBtnAddressPressed] = useState(false);
  const [btnDebitPressed, setBtnDebitPressed] = useState(false);
  console.log("FILTRADO", filteredOrder);

  const orderByDebitValue = (order: Order[]) => {
    const neworder = [...order].sort((a, b) => {
      return b.valorDaFicha - a.valorDaFicha;
    });
    console.log("neworder", neworder);
    setFilteredOrder(neworder);
  };
  const orderByDate = (order: Order[]) => {
    const neworder = [...order].sort((a, b) => {
      return (
        new Date(b.dataDaVenda).getTime() - new Date(a.dataDaVenda).getTime()
      );
    });
    setFilteredOrder(neworder);
  };
  const orderByAddress = (order: Order[]) => {
    const newOrder = [...order].sort((a, b) => {
      if (a.clienteInfo.endereco < b.clienteInfo.endereco) {
        return -1;
      }
      if (a.clienteInfo.endereco > b.clienteInfo.endereco) {
        return 1;
      }
      return 0;
    });
    setFilteredOrder(newOrder);
  };

  return (
    <Container>
      <SafeAreaView>
        <SubTitle textSize="45px" textColor="white">
          {" "}
          Fichas de vendas
        </SubTitle>
        <SubTitle textColor="white" textSize="25px">Filtrar por:{`${btnDataPressed? " Data" : btnAddressPressed? " Endereço" : btnDebitPressed? " Débito " : ""}`}</SubTitle>
        <FilterArea>
          <FilterButton
            onPress={() => {
              orderByDate(filteredOrder);
              setBtnDataPressed(true);
              setBtnAddressPressed(false);
              setBtnDebitPressed(false);
            }}
            isPressed={btnDataPressed}
          ><SubTitle textColor="black" textSize="15px">Data</SubTitle></FilterButton>
          <FilterButton
            onPress={() => {
              orderByAddress(filteredOrder);
              setBtnDataPressed(false);
              setBtnAddressPressed(true);
              setBtnDebitPressed(false);
            }}
            isPressed={btnAddressPressed}
          ><SubTitle textColor="black" textSize="15px">Endereço</SubTitle></FilterButton>
          <FilterButton
            onPress={() => {
              orderByDebitValue(filteredOrder);
              setBtnDataPressed(false);
              setBtnAddressPressed(false);
              setBtnDebitPressed(true);
            }}
            isPressed={btnDebitPressed}
          ><SubTitle textColor="black" textSize="15px">Débito</SubTitle></FilterButton>
        </FilterArea>
        <FlatList
          data={filteredOrder}
          renderItem={({ item }) => (
            <Item
              navigation={navigation}
              chooseOrderCard={chooseOrderCard}
              item={item}
            ></Item>
          )}
          keyExtractor={(item) => item.orderId}
        ></FlatList>
      </SafeAreaView>
    </Container>
  );
};
