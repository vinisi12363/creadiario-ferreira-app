import styled from "styled-components/native";
import { StatusBar } from "react-native";

const barHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const LoginContainer = styled.View`
  margin-top: ${(barHeight/2) + "px"};
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0f172a;
`;

export const LoginTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const LoginInput = styled.TextInput`
    width: 80%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    margin-top: 30px;
    border-radius: 10px;
    background-color: white;
`;

export const LoginButton = styled.Button`
    width: 80%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
`;
export const TouchableLogin = styled.TouchableOpacity`
    width: 40%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    border: 2px  white;
    margin-top:30%;
    border-radius: 10px;
    background-color: darkblue;
`;

export const LoginText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-align: center;
`;  