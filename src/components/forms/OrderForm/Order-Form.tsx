import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useClientContext } from "../../../Context/ClientContext";
import { useProductContext } from "../../../Context/ProductContext";

import {
  Container,
  Title,
  FormContainer,
  FormTitle,
  Button,
  FormArea,
  DateButton,
} from "./OrderFormStyle";

const OrderForm = () => {
  const { client } = useClientContext();
  const { product } = useProductContext();

  const [selectedProduct, setSelectedProduct] = useState({
    nome: "",
    valor: "",
    docId: "",
  });
  const [selectedClient, setSelectedClient] = useState({
    docId: "",
    nome: "",
    endereco: "",
    telefone: "",
  });
  const [valueOfProduct, setValueOfProduct] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedParcelas, setSelectedParcelas] = useState<string>("");
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");
  const [disableSalvar, setDisableSalvar] = useState<boolean>(true);

  const parcelas = [
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
    "11x",
    "12x",
  ];

  const setarDados = () => {
    console.log("metodo de pgto ", metodoPagamento);
    const data = {
      cliente: {
        id: selectedClient.docId,
        nome: selectedClient.nome,
        endereco: selectedClient.endereco,
      },
      produto: {
        id: selectedProduct.docId,
        nome: selectedProduct.nome,
        valor: selectedProduct.valor,
      },
      data: selectedDate,
      parcelas: selectedParcelas,
      metodoPagamento: metodoPagamento,
    };

    console.log("data", data);

    Alert.alert(
      "Pedido cadastrado com sucesso!",
      `- Cliente: ${selectedClient.nome}
      - Produto: ${data.produto.nome}
      - Valor: R$${data.produto.valor},00
      - Método de pagamento: ${data.metodoPagamento}
      - Parcelas: ${data.parcelas}
      - Data: ${date.toLocaleString()}
      
      `
    );
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  console.log("date", date);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
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
              <Picker
                selectedValue={selectedProduct}
                onValueChange={(itemValue) => setSelectedProduct(itemValue)}
              >
                <Picker.Item
                  label="Selecione o produto"
                  enabled={false}
                ></Picker.Item>
                {product._j.map((p) => (
                  <Picker.Item
                    key={p.docId}
                    label={` ${p.nome} - R$ ${p.valor},00`}
                    value={p}
                  />
                ))}
              </Picker>

              {selectedProduct.nome && (
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
                    <Picker.Item label="cartão de crédito" value="cartao" />
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
                        label={parcela}
                        value={parcela}
                      />
                    ))}
                  </Picker>
                </>
              )}
            </>
          )}
        </FormArea>

        <Button onPress={() => setarDados()}>
          <Title>Salvar</Title>
        </Button>
      </FormContainer>
    </Container>
  );
};

export default OrderForm;
