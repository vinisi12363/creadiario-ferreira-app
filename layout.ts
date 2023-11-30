import styled from "styled-components/native";
import { StatusBar } from "react-native";


const barHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const Container = styled.View`
  flex: 1;
  padding-top: ${(barHeight/2) + "px"};
  background-color: #0f172a;
  width: 100%;
  

  
  `