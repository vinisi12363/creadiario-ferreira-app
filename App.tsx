import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Client } from './src/Screens/Clients';
import { Container } from './src/AppLayout';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Client></Client>
      
    </Container>
  );
}
