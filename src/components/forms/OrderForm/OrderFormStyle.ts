import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #062360;
    min-width: 90%;
`
export const PickerContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: white:
    min-width: 90%;

`
export const FormContainer = styled.View`
    flex:1.0;
    min-width: 100%;
    Align-items: center;
    justify-content: start;
    padding: 20px;
    background-color: #13747d;
`
export const FormArea = styled.View`
    flex:0.9;
    min-width: 100%;
    border-radius:10px;
    Align-items: center;
    justify-content: start;
    padding: 3px;
    background-color: #d7d8c5;
`
export const TextInput = styled.TextInput`
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    min-width: 90%;
    border: 1px solid #ccc;
`
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
`
export  const FormTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
    position:relative;
    bottom:0%;
    color: #fff;
    margin-bottom: 20px;
`
//TODO tem que pesquisar sobre o Datepicker  pra pegar a data da ficha ... /.....
export const Button = styled.TouchableOpacity`
    
    background-color: lightgrey;
    border-radius: 10px;
   
    border: 1px solid #ccc;
    color:#000;
    align-items: center;
    justify-content: center;
    max-width:45%;
    position:relative;
    left:30%;
    top:5%;

`
export const DateButton = styled.TouchableOpacity`
    
    background-color: lightgrey;
    border-radius: 10px;
    margin-top: 15px;
    border: 1px solid #ccc;
    color:#000;
    align-items: center;
    justify-content: center;
    max-width:50%;
    position:fixed;
    left:50%;
    bottom:15%;
    z-index:1;

`


