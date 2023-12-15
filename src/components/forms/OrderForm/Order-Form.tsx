import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Alert } from "react-native";
import { useClientContext } from "../../../Context/ClientContext";
import { useProductContext } from "../../../Context/ProductContext";

import {
  Container,
  Title,
  FormContainer,
  FormTitle,
  Button,
  FormArea,
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
    docId:"",
    nome: "",
    endereco: "", 
    telefone:""
  });
  const [valueOfProduct, setValueOfProduct] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedParcelas, setSelectedParcelas] = useState<string>("");
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");

  const parcelas = [
    "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x", "11x", "12x"
  ];

  const metodoPgto = [
    { cod: 1, tipo: "à vista" },
    { cod: 2, tipo: "crediário" },
    { cod: 3, tipo: "cartão de crédito" },
  ];

  const setarDados = () => {
    console.log("metodo de pgto ", metodoPagamento)
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
      - Parcelas: ${data.parcelas}`
    );
  };


 console.log("selectedClient", selectedClient);
  return (
    <Container>
      <FormContainer>
        <FormTitle>Lançamento de Vendas</FormTitle>
        <FormArea>
          <Title>Cliente:</Title>
          <Picker
            selectedValue={selectedClient}
            onValueChange={(itemValue) =>  setSelectedClient(itemValue)}
          >
            <Picker.Item label="Selecione o cliente" enabled={false}></Picker.Item>
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
                 <Picker.Item label="Selecione o produto" enabled={false}></Picker.Item>
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
                    <Picker.Item label="Selecione a forma de pagamento" enabled={false}></Picker.Item>
                    <Picker.Item label="à vista" value="avista" />
                    <Picker.Item label="crediário" value="crediario" />
                    <Picker.Item label="cartão de crédito" value="cartao" />
                  </Picker>
                </>
              )}

              {metodoPagamento === "crediario" && (
                <>
                  <Title>Parcelas:</Title>
                  <Picker.Item label="Selecione a qaunt. parcelas" enabled={false}></Picker.Item>
                  <Picker
                    selectedValue={selectedParcelas}
                    onValueChange={(itemValue) => setSelectedParcelas(itemValue)}
                  >
                    {parcelas.map((parcela) => (
                      <Picker.Item key={parcela} label={parcela} value={parcela} />
                    ))}
                  </Picker>
                </>
              )}
            </>
          )}
        </FormArea>
        <Button title="Cadastrar" onPress={() => setarDados()} />
      </FormContainer>
    </Container>
  );
};

export default OrderForm;
