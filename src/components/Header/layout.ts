import styled from "styled-components/native";
import { StatusBar } from "react-native";


const barHeight = StatusBar.currentHeight;

export const HeaderContainer = styled.View`
    margin-top: ${barHeight}px;
    z-index:99
    background-color: blue;
    width: 100%;
    height: 15%;
    justify-content: center;
`

export const HeaderTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-bottom: 10%;
`


