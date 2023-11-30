import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Container, TextInput, Title, FormContainer, FormTitle } from "./ClientFormStyle";

interface CadastroClientFormProps {
  // Adicione propriedades adicionais conforme necessário
}

const CadastroClientForm: React.FC<CadastroClientFormProps> = () => {
  const [nome, setNome] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");

  const handleCadastro = () => {
    // Aqui você pode adicionar lógica para processar os dados do formulário
    console.log("Nome:", nome);
    console.log("endereco:", endereco);
    console.log("cpf:", cpf);

    // Limpar os campos após o envio
    setNome("");
    setEndereco("");
    setCpf("");
    setTelefone("");
  };
  //TODO = adicionar  validações de campos vazios, no nome e telefone 
  //TODO = adicionar validação de cpf
  //TODO = adicionar validação de telefone
  //TODO = adicionar estilo no botão .
  
  return (
    <Container>
      <FormContainer>
        <FormTitle>Cadastro de Clientes</FormTitle>
        <Title>Nome:</Title>
        <TextInput
          
          value={nome}
          onChangeText={(Title) => setNome(Title)}
        />

        <Title>Endereço:</Title>
        <TextInput
        
          value={endereco}
          onChangeText={(Title) => setEndereco(Title)}
         
        />
        <Title>Telefone:</Title>
        <TextInput  
          value={telefone}
          onChangeText={(Title) => setTelefone(Title)}
          keyboardType="phone-pad"
        />
        <Title>CPF:</Title>
        <TextInput
        
          value={cpf}
          onChangeText={(Title) => setCpf(Title)}
          keyboardType="numeric"
        />

        <Button title="Cadastrar" onPress={handleCadastro} />
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

export default CadastroClientForm;
