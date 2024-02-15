import styled from "styled-components/native";
import { StatusBar } from "react-native";

const barHeight = StatusBar.currentHeight;
type texSizeProps = {
    textSize: string;
    textColor: string;

}

export const Container = styled.View`
    flex: 1;
    padding-top: ${barHeight}px;
    justify-content: top;
    align-items: center;
    background-color: #0f172a;
    min-width: 90%;
`

export const CardView = styled.View`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    max-width: 90%;
    border: 1px solid #000;
    margin-top: 10px;
    margin-bottom: 10px;


`
export const Touchable = styled.TouchableOpacity`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 90%;
    border: 3px solid #000;
    margin-top: 10px;
    margin-bottom: 10px;

`
export const TouchableText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
    text-align: center;

`
export const Title = styled.Text<texSizeProps>`
    font-size: ${props => props.textSize};
    font-weight: bold;
    color:  ${props => props.textColor};
    text-decoration: none;
    margin-bottom: 20px;
`
export const SubTitle = styled.Text<texSizeProps>`
    font-size:  ${props => props.textSize};
    font-weight: bold;
    color: ${props => props.textColor};
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
