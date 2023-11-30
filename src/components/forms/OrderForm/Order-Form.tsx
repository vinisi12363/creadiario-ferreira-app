import { useState, useEffect } from "react";
import {
  Container,
  TextInput,
  Title,
  FormContainer,
  FormTitle,
  Button,
  PickerContainer,
} from "./OrderFormStyle";
import { Picker } from "@react-native-picker/picker";
import { Alert } from "react-native";

const OrderForm = () => {
  const [selectedProduct, setSelectedProduct] = useState({
    produto: "",
    valor: 0,
  });
  const [selectedClient, setSelectedClient] = useState({
    nome: "",
    endereco: "",
  });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedParcelas, setSelectedParcelas] = useState<string>("");
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");
  const [newData, setNewData] = useState({
    prod: [{ produto: "", valor: 0 }],
    nomeCliente: "",
    Data: "",
  });

  const clientes = [
    {
      nome: "João",
      endereco: "rua dos bobos",
    },
    {
      nome: "Maria",
      endereco: "rua dos bobos",
    },
    {
      nome: "José",
      endereco: "rua dos bobos",
    },
    {
      nome: "Pedro",
      endereco: "rua dos bobos",
    },
    {
      nome: "Antônio",
      endereco: "rua dos bobos",
    },
    {
      nome: "Francisco",
      endereco: "rua dos bobos",
    },
    {
      nome: "Carlos",
      endereco: "rua dos bobos",
    },
    {
      nome: "Paulo",
      endereco: "rua dos bobos",
    },
  ];
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

  const setarDados = () => {
    const data = {
      produto: {nome: selectedProduct.produto, valor: selectedProduct.valor},
      cliente: { nome: selectedClient.nome, endereco: selectedClient.endereco },
      data: selectedDate,
      parcelas: selectedParcelas,
      metodoPagamento: metodoPagamento,
    };
    console.log(data);
    Alert.alert(
      "Pedido cadastrado com sucesso!",
      `nome: ${data.cliente.nome} - produto: ${data.produto.nome}  - parcelas: ${data.parcelas} - método de pagamento: ${data.metodoPagamento}`
    );
  };
  return (
    <Container>
      <FormContainer>
        <FormTitle>Lançamento de Pedidos</FormTitle>

        <Title>Cliente:</Title>
        <Picker
          selectedValue={selectedClient}
          onValueChange={(cliente) => {
            setSelectedClient(cliente);
          }}
        >
          {clientes.map((cliente) => {
            return (
              <Picker.Item
                key={cliente.nome}
                label={`cliente: ${cliente.nome} - endereço: ${cliente.endereco}`}
                value={cliente}
              />
            );
          })}
        </Picker>

        <Title>Produto:</Title>
        <Picker
          selectedValue={selectedProduct}
          onValueChange={(itemValue, itemIndex) =>
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

        
        <Title>Método de pagamento:</Title>
        <Picker
          selectedValue={metodoPagamento}
          onValueChange={(itemValue, itemIndex) =>
            setMetodoPagamento(itemValue)
          }
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
        {metodoPagamento === "crediário" ? (
            <>
        <Title>parcelas:</Title>
        <Picker
          selectedValue={selectedParcelas}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedParcelas(itemValue)
          }
        >
          {parcelas.map((parcela) => {
            return (
              <Picker.Item key={parcela} label={parcela} value={parcela} />
            );
          })}
        </Picker>
        </>
        ) : 
        (<></>)}
        <Button title="cadastrar" onPress={() => setarDados()} />
      </FormContainer>
    </Container>
  );
};

export default OrderForm;
