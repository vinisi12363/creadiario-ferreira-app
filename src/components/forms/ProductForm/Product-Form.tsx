import React, { useState } from "react";
import {  StyleSheet } from "react-native";
import { Container, TextInput, Title, FormContainer, FormTitle, Button } from "./ProdFormStyle";

interface CadastroFormProps {
  // Adicione propriedades adicionais conforme necessário
}

const CadastroProdForm: React.FC<CadastroFormProps> = () => {
  const [nome, setNome] = useState<string>("");
  const [valor, setValor] = useState<number>();
  const [quant, setQuant] = useState<number>();
  const [quantParcelas, setQuantParcelas] = useState<number>();

  const handleCadastro = () => {
    // Aqui você pode adicionar lógica para processar os dados do formulário
    console.log("Nome:", nome);
    console.log("valor:", valor);
    console.log("quant:", quant);

    // Limpar os campos após o envio
    setNome("");
    setValor(0);
    setQuant(0);
    setQuantParcelas(0);
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

        <Title>Preço:</Title>
        <TextInput
          inputMode="numeric"
          value={valor ? valor.toString() : ''}
          keyboardType="decimal-pad"
          onChangeText={(Title) => setValor(Number(Title))}
        />
        <Title>quantParcelas:</Title>
        <TextInput  
          value={quantParcelas? quantParcelas.toString(): ''}
          onChangeText={(Title) => setQuantParcelas(Number(Title))}
          keyboardType="phone-pad"
        />
        <Title>quant:</Title>
        <TextInput
        
          value={quant? quant.toString(): ''}
          onChangeText={(Title) => setQuant(Number(Title))}
          keyboardType="numeric"
        />

        <Button title="cadastrar" onPress={handleCadastro} />
      </FormContainer>
      
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroProdForm;
