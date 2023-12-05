import { useState, useEffect } from "react";
import {
  Container,
  Title,
  FormContainer,
  FormTitle,
  Button,
} from "./OrderFormStyle";
import { Picker } from "@react-native-picker/picker";
import { Alert } from "react-native";
import { useClientContext } from "../../../Context/ClientContext";

const OrderForm = () => {
  const {client} = useClientContext();
  console.log("Context client", client);
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [valueOfProduct, setValueOfProduct] = useState<number>(0);
  const [selectedClient, setSelectedClient] = useState<string>("");  
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedParcelas, setSelectedParcelas] = useState<string>("");
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");
  
  const [newOrderData, setNewOrderData] = useState({
    prod: [{ produto: "", valor: 0 }],
    nomeCliente: "",
    Data: "",
  });

  const produtos = [
    { produto: "panela de pressão", valor: 100 },
    { produto: "sofá", valor: 110 },
    { produto: "cadeira", valor: 130 },
    { produto: "mesa", valor: 150 },
    { produto: "cama", valor: 170 },
    { produto: "geladeira", valor: 190 },
    { produto: "fogão", valor: 200 },
    { produto: "microondas", valor: 210 },
    { produto: "liquidificador", valor: 220 },
    { produto: "notebook", valor: 230 },
    { produto: "smartphone", valor: 240 },
  ];
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
  const metodoPgto = [
    { cod: 1, tipo: "à vista" },
    { cod: 2, tipo: "crediário" },
    { cod: 3, tipo: "cartão de crédito" },
  ];
  const setarDados = () => {

    // TODO ELE SÓ ESTÁ PEGANDO O NOME DOS ITENS E NÃO O OBJETO COMPLETO , TEM QUE DAR UM FIND ANTES  PARA PEGAR TODOS OS VALORES , ANTES DE SALVAR NO BANCO

   
    const data = {
      produto: { nome: selectedProduct, valor: valueOfProduct },
      cliente: selectedClient,
      data: selectedDate,
      parcelas: selectedParcelas,
      metodoPagamento: metodoPagamento,
    };
    console.log(data);
    Alert.alert(
      "Pedido cadastrado com sucesso!",
      `   - nome: ${data.cliente}
          - produto: ${data.produto.nome}
          - valor: ${data.produto.valor}
          - parcelas: ${data.parcelas}
          - método de pagamento: ${data.metodoPagamento}
     `
    );
  };
  
  return (
    <Container>
      <FormContainer>
        <FormTitle>Lançamento de Pedidos</FormTitle>

        <Title>Cliente:</Title>
        <Picker
              selectedValue={selectedClient}
              onValueChange={(itemValue) => setSelectedClient(itemValue)
              }
            >
              {client._j.map((c:any) => {
                return (
                  <Picker.Item
                    key={c.nome}
                    label={
                            `- Nome: ${c.nome} - Endereço: ${c.endereco}`
                        }
                    value={c.nome}
                  />
                );
              })}
            </Picker>

        {selectedClient !== "" ? (
          <>
            <Title>Produto:</Title>
            <Picker
              selectedValue={selectedProduct}
              onValueChange={(itemValue) =>
                setSelectedProduct(itemValue)
              }
            >
              {produtos.map((produto) => {
                return (
                  <Picker.Item
                    key={produto.produto}
                    label={`produto: ${produto.produto} - valor: ${produto.valor}`}
                    value={produto.produto}
                  />
                );
              })}
            </Picker>

            {selectedProduct !== "" ? (
              <>
                <Title>Método de pagamento:</Title>
                <Picker
                  selectedValue={metodoPagamento}
                  onValueChange={(itemValue) => setMetodoPagamento(itemValue)}
                >
                  <Picker.Item
                    key={metodoPagamento}
                    label={"à vista"}
                    value={"avista"}
                  />
                  <Picker.Item
                    key={metodoPagamento}
                    label={"crediário"}
                    value={"crediario"}
                  />
                  <Picker.Item
                    key={metodoPagamento}
                    label={"cartão de crédito"}
                    value={"cartao"}
                  />
                </Picker>
              </>
            ) : (
              <></>
            )}

            {metodoPagamento === "crediario" ? (
              <>
                <Title>parcelas:</Title>
                <Picker
                  selectedValue={selectedParcelas}
                  onValueChange={(itemValue) => setSelectedParcelas(itemValue)}
                >
                  {parcelas.map((parcela) => {
                    return (
                      <Picker.Item
                        key={parcela}
                        label={parcela}
                        value={parcela}
                      />
                    );
                  })}
                </Picker>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}

        <Button title="cadastrar" onPress={() => setarDados()} />
      </FormContainer>
    </Container>
  );
};

export default OrderForm;