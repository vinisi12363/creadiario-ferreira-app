import { Alert } from 'react-native';
import * as Style from './Layout';
import { useState, useEffect } from 'react';
import { getUser } from "../../Services/User-service";


export const Login = ({navigation}:any)=>{
    const [users, setUsers] = useState<any>([]); 
    const [userCpf, setUserCpf] = useState<string>("");
    const CPF = '12345678900';
    console.log(users);
   
    useEffect(()=>{
       const result =  getUser().then((response)=>{
            setUsers(response);
        })
     console.log('result',result);  
    },[])


    const callHomeScreen = () => {
        if(userCpf.length === 11 && userCpf === CPF){
            navigation.navigate("Home");
        }
        else if(userCpf.length !== 11 || userCpf !== CPF){
            Alert.alert("CPF inválido ou não cadastrado");
            setUserCpf("");
        }
    }
    
    return(
            <>
             
                <Style.LoginContainer>
                    <Style.LoginTitle>Login</Style.LoginTitle>
                        <Style.LoginInput 
                            placeholder='seu CPF' 
                            keyboardType='numeric'
                            value = {userCpf}
                            onChange={(e)=>{setUserCpf(e.nativeEvent.text)}}
                        ></Style.LoginInput>
                            <Style.TouchableLogin onPress={()=>{callHomeScreen()}}>
                                <Style.LoginText>Entrar</Style.LoginText>
                                
                            </Style.TouchableLogin>
                            <Style.TouchableLogin onPress={()=>{navigation.navigate("SignUp")}}>
                                <Style.LoginText>Cadastrar novo Usuário</Style.LoginText>
                            </Style.TouchableLogin>
                </Style.LoginContainer>

            </>
    );
}