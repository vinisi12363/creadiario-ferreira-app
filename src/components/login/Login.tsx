import { Alert } from 'react-native';
import * as Style from './Layout';
import { useState } from 'react';



export const Login = ({navigation}:any)=>{
    const [userCpf, setUserCpf] = useState<string>("");
    const CPF = '12345678900';
    
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
             
                <Style.LgoinContainer>
                    <Style.LoginTitle>Login</Style.LoginTitle>
                        <Style.LoginInput 
                            placeholder='seu CPF' 
                            keyboardType='numeric'
                            value = {userCpf}
                            onChange={(e)=>{setUserCpf(e.nativeEvent.text)}}
                        ></Style.LoginInput>
                            <Style.LoginButton title='Logar' onPress={()=>{callHomeScreen()}}></Style.LoginButton>
                </Style.LgoinContainer>

            </>
    );
}