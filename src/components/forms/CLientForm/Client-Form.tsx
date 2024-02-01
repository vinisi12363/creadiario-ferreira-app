import React, { useState } from "react";
import { Alert, Button, StyleSheet } from "react-native";
import { Container, TextInput, Title, FormContainer, FormTitle } from "./ClientFormStyle";
import { postClient } from "../../../Repository/Client-repository";

interface CadastroClientFormProps {
  // Adicione propriedades adicionais conforme necessário
}

const CadastroClientForm: React.FC<CadastroClientFormProps> = () => {
  const [nome, setNome] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const  [data , setData] = useState({});
  
  const handleCadastro = async () => {

     const newDate = {
      nome:nome,
      endereco:endereco,
      cpf:cpf,
      telefone:telefone,
    }
    setData(newDate);
    try {
      const result = await postClient(newDate);
      if(result)
      Alert.alert("Cliente cadastrado com sucesso");
   
    } catch (error) {
      console.log("error", error);
      Alert.alert("Erro ao cadastrar cliente", "Tente novamente mais tarde");
    }
    
    setNome("");
    setEndereco("");
    setCpf("");
    setTelefone("");
    registerClient();
  };

  const registerClient = async () => {
   
  }
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

        <Button title="Cadastrar" onPress={()=>{handleCadastro()
        }} />
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
