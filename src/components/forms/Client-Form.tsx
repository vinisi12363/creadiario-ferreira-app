import React, { useState } from 'react';
import {  Button, StyleSheet } from 'react-native';
import { Container, TextInput, Title ,FormContainer } from './ClientFormStyle';

interface CadastroFormProps {
  // Adicione propriedades adicionais conforme necessário
}

const CadastroForm: React.FC<CadastroFormProps> = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Aqui você pode adicionar lógica para processar os dados do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <Container>
      <FormContainer>
      <Title>Nome:</Title>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(Title) => setNome(Title)}
      />

<Title>Endereço:</Title>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(Title) => setEmail(Title)}
        keyboardType="email-address"
      />
      <Title>Telefone:</Title>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(Title) => setEmail(Title)}
        keyboardType="email-address"
      />
      <Title>CPF:</Title>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(Title) => setEmail(Title)}
        keyboardType="email-address"
      />
    

      <Button title="Cadastrar" onPress={handleCadastro} />

      
      </FormContainer>
      {/* Adicione mais campos e estilos conforme necessário */}
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CadastroForm;
