import styled from "styled-components/native";
import { StatusBar } from "react-native";


const barHeight = StatusBar.currentHeight;

export const HeaderContainer = styled.View`
    margin-top: ${barHeight}px;
    z-index:99
    background-color: #282828;
    width: 100%;
    height: 10%;
    justify-content: center;
`

export const HeaderTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: white;
    margin-bottom: 1%;
`


