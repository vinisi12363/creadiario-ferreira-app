import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Container, TextInput, Title, FormContainer, FormTitle } from "./UserFormStyle";
import { postUser } from "../../../Services/User-service";
import {Alert} from 'react-native';

interface CadastroUserProps {
  navigation:any;
}

export const CadastroUser: React.FC<CadastroUserProps> = ({navigation}:any) => {
  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [userId , setUserId] = useState<string>("");
  const  [data , setData] = useState({});
  const handleCadastro = () => {

    
    const newDate = {
      nome:nome,
      admin: false,
      cpf:cpf,
      funcionario:true,
    }
    setData(newDate);
    
    setNome("");
    setCpf("");
     const result = postUser(newDate);
     setUserId(result.toString());
   
      Alert.alert("Mensagem do sistema: ","Usuário cadastrado com sucesso!");
      navigation.navigate("Home");
     
  };
  //TODO = adicionar  validações de campos vazios, no nome e telefone 
  //TODO = adicionar validação de cpf
  //TODO = adicionar validação de telefone
  //TODO = adicionar estilo no botão .
  
  return (
    <Container>
      <FormContainer>
        <FormTitle>Cadastro de usuário</FormTitle>
        <Title>Nome:</Title>
        <TextInput
          
          value={nome}
          onChangeText={(Title) => setNome(Title)}
        />
        <Title>CPF:</Title>
        <TextInput
        
          value={cpf}
          onChangeText={(Title) => setCpf(Title)}
          keyboardType="numeric"
        />

        <Button title="Cadastrar" onPress={()=>{handleCadastro()}} />
      </FormContainer>
      
    </Container>
  );
};

