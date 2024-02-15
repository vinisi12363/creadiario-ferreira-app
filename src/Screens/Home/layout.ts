import styled from "styled-components/native";
import { StatusBar } from "react-native";

const barHeight = StatusBar.currentHeight;

type textSizeProps = {
    textSyze: string;
}

export const Container = styled.View`
    flex: 1;
    padding-top: ${barHeight}px;
    justify-content: top;
    align-items: center;
    background-color: #0f172a;
    min-width: 90%;
`

export const Touchable = styled.TouchableOpacity`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 90%;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 10px;

`
export const TouchableText = styled.Text<textSizeProps>`
    font-size: ${props => props.textSyze};
    font-family: 'Roboto';
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
    text-align: center;

`
export const Title = styled.Text`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-decoration: underline;
    margin-bottom: 20px;
`
export const SubTitle = styled.Text<textSizeProps>`
    font-size: ${props => props.textSyze};
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;

`

export const Button = styled.Button`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 90%;
    border: 1px solid #ccc;


`
