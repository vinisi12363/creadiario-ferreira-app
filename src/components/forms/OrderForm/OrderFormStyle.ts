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
    padding: 0px;
    background-color: #0f172a;
`
export const FormArea = styled.View`
    flex:1;
    min-width: 100%;
    min-height: 75%;
    border-radius:10px;
    Align-items: center;
    justify-content: start;
    position:relative;
    bottom:10%;
    padding: 13px;
    margin-top: 0px;
    background-color: white;
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
    margin-bottom: 10px;
`
export  const FormTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto';
    padding: 40px;
    font-weight: bold;
    position:relative;
    border 5px solid #fff;
    width: 100%;
    bottom:0%;
    color: #fff;
    margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
    
    background-color: lightblue;
    border-radius: 10px;
   
    border: 1px solid #ccc;
    color:#000;
    align-items: center;
    justify-content: center;
    max-width:45%;
    position:relative;
    left:30%;
    bottom:8%;

`

export const PlusBtn = styled.TouchableOpacity`
        background-color: lightblue;
        border-radius: 5px;
        border: 3px solid #ccc;
        align-items: center;
        justify-content: center;
        text-align:center;
        width:12%;
        min-height:10px;
        position:fixed;
        left:85%;
        bottom:10%;
        z-index:1;
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
    bottom:95%;
    z-index:1;

`


