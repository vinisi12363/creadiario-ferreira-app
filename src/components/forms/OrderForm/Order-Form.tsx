import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Alert, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useClientContext } from "../../../Context/ClientContext";
import { useProductContext } from "../../../Context/ProductContext";
import { ProductPicker } from "./ProductPicker";
import * as orderService from "../../../Services/Order-service";
import { Order, OrderPost } from "../../../Models/Order";
import { SubTitle } from "../../../Screens/Home/layout";
import { productServices } from "../../../Services/Product-service";

import {
  Container,
  Title,
  FormContainer,
  FormTitle,
  Button,
  FormArea,
  DateButton,
  // PlusBtn (unused import)
} from "./OrderFormStyle";

const OrderForm = () => {
  const { client, fetchclient } = useClientContext();
  const { selectedProduct } = useProductContext();

  const [selectedClient, setSelectedClient] = useState({
    docId: "",
    nome: "",
    cpf: "",
    endereco: "",
    telefone: "",
  });

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedParcelas, setSelectedParcelas] = useState<number>(1);
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");
  const [disableSalvar, setDisableSalvar] = useState<boolean>(false);
  const [duplicatas, setDuplicatas] = useState<object[]>([]); 
  const parcelas = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const setarDados = async () => {
    setDisableSalvar(true);
    let datasDuplicatas = []; 
    try {
      if (
        !selectedDate ||
        !selectedClient ||
        !selectedProduct ||
        !metodoPagamento ||
        !selectedParcelas
      ) {
        throw new Error("Preencha todos os campos!");
      }
    
      if(metodoPagamento==="crediario"){
         let newObjDuplicatas = [] ;
          for (let i = 0; i < selectedParcelas; i++) {
            const data = new Date(selectedDate);
            data.setMonth(data.getMonth() + i);
            datasDuplicatas.push(data.toISOString().split("T")[0]);
            
           
            
              newObjDuplicatas.push( 
                {
                  dataDuplicata: data.toISOString().split("T")[0],
                  valorDuplicata: ((selectedProduct.valor/selectedParcelas)
                   + 
                  (selectedProduct.valor * 0.03))
                }
              )
          
          }
      }
      
      const newOrder: OrderPost = {
        dataDaVenda: selectedDate,
        clienteInfo: selectedClient,
        products: [selectedProduct],
        metodoPagamento: metodoPagamento,
        valorDaFicha: selectedProduct.valor,
        parcelas: selectedParcelas,
        duplicatas: duplicatas,
      };

      const result = await orderService.postOrder(newOrder);

      if (result) {
        Alert.alert("Venda cadastrada com sucesso!");
        productServices.updateStock(selectedProduct);
        setSelectedDate("");
        setSelectedClient({
          docId: "",
          nome: "",
          cpf: "",
          endereco: "",
          telefone: "",
        });
        setSelectedParcelas(1);
        setMetodoPagamento("");
      }
    } catch (error) {
      Alert.alert("Erro ao cadastrar venda!", error.message || "Erro desconhecido");
      console.error("Error in setarDados:", error);
    } finally {
      setDisableSalvar(false);
    }
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
  
    if (selectedDate !== undefined) {
      setShow(false);
      const today = date;
      if (selectedDate > today) {
        Alert.alert("Data inválida!", "A data da venda tem que ser menor que a data de hoje!");
        return;
      }
      setDate(selectedDate);
      setSelectedDate(selectedDate.toISOString().split("T")[0]);
    } else {
      setShow(false);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Lançamento de Vendas</FormTitle>
        {date?.toISOString()?  (<SubTitle textSyze="15px">venda: {date.toISOString().split("T")[0]}</SubTitle>) : <SubTitle textSyze="15px">Escolha a data da venda!</SubTitle>}

        <SafeAreaView>
          <DateButton onPress={showDatepicker}>
            <Title>Data da venda</Title>
          </DateButton>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </SafeAreaView>
        <FormArea>
          <Title>Cliente:</Title>
          <Picker
            selectedValue={selectedClient}
            onValueChange={(itemValue) => setSelectedClient(itemValue)}
          >
            <Picker.Item
              label="Selecione o cliente"
              enabled={false}
            ></Picker.Item>
            {client._j.map((c) => (
              <Picker.Item
                key={c.docId}
                label={`- Nome: ${c.nome} - Endereço: ${c.endereco}`}
                value={c}
              />
            ))}
          </Picker>

          {selectedClient.nome && (
            <>
              <Title>Produto:</Title>
              <ProductPicker />

              {selectedProduct !== null && (
                <>
                  <Title>Método de pagamento:</Title>
                  <Picker
                    selectedValue={metodoPagamento}
                    onValueChange={(itemValue) => setMetodoPagamento(itemValue)}
                  >
                    <Picker.Item
                      label="Selecione a forma de pagamento"
                      enabled={false}
                    ></Picker.Item>
                    <Picker.Item label="à vista" value="avista" />
                    <Picker.Item label="crediário" value="crediario" />
                    <Picker.Item
                      label="cartão de crédito"
                      value="cartao"
                    />
                  </Picker>
                </>
              )}

              {metodoPagamento === "crediario" && (
                <>
                  <Title>Parcelas:</Title>

                  <Picker
                    selectedValue={selectedParcelas}
                    onValueChange={(itemValue) =>
                      setSelectedParcelas(itemValue)
                    }
                  >
                    <Picker.Item
                      label="Selecione a quant. parcelas"
                      enabled={false}
                    ></Picker.Item>
                    {parcelas.map((parcela) => (
                      <Picker.Item
                        key={parcela}
                        label={parcela.toString()}
                        value={parcela}
                      />
                    ))}
                  </Picker>
                </>
              )}
            </>
          )}
        </FormArea>

        <Button disabled={disableSalvar} onPress={() => setarDados()}>
          <Title>Salvar</Title>
        </Button>
      </FormContainer>
    </Container>
  );
};

export default OrderForm;
