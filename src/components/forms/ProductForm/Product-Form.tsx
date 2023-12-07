import React, { useState } from "react";
import {Alert } from 'react-native';
import {  StyleSheet } from "react-native";
import { Container, TextInput, Title, FormContainer, FormTitle, Button } from "./ProdFormStyle";
import { postProduct } from "../../../Services/Product-service";
interface CadastroFormProps {
  // Adicione propriedades adicionais conforme necessário
}

const CadastroProdForm: React.FC<CadastroFormProps> = () => {
  const [nome, setNome] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [quant, setQuant] = useState<number>(0);
  const [disabled , setDisabled ] = useState (false);
  const [quantParcelas, setQuantParcelas] = useState<number>();

  const handleCadastro = () => {
    setDisabled(true);
    if(!valor || !nome || !quant){
      setDisabled(false);
      Alert.alert(
        "Erro", "todos os campos são obrigatórios!"
      )
      return;
    }
    console.log("Nome:", nome);
    console.log("valor:", valor);
    console.log("quant:", quant);

   
    
    try {
      const promise = postProduct({nome, quant, valor}); 
      setDisabled(false); 
      console.log("PROMISE",promise);
      setNome("");
      setValor(0);
      setQuant(0);
      setQuantParcelas(0);
    } catch (error) {
      Alert.alert("Erro" , "houve um erro ao cadastrar o seu produto, tente novamente mais tarde");
      setDisabled(false);
    }

  };
  
  //TODO = adicionar  validações de campos vazios, no nome e quantParcelas 
  //TODO = adicionar validação de quant
  //TODO = adicionar validação de quantParcelas
  //TODO = adicionar estilo no botão .
  
  return (
    <Container>
      <FormContainer>
        <FormTitle>Cadastro de Produtos</FormTitle>
        <Title>Nome:</Title>
        <TextInput
          
          value={nome}
          onChangeText={(Title) => setNome(Title)}
        />
        
        <Title>Valor do produto:</Title>
        <TextInput
        
          value={valor? valor.toString(): ''}
          onChangeText={(Title) => setValor(Number(Title))}
          keyboardType="numeric"
        />

        
        <Title>Quantidade no Estoque:</Title>
        <TextInput
        
          value={quant? quant.toString(): ''}
          onChangeText={(Title) => setQuant(Number(Title))}
          keyboardType="numeric"
        />

        <Button disabled={disabled} title="cadastrar" onPress={handleCadastro} />
      </FormContainer>
      
    </Container>
  );
};

export default CadastroProdForm;
