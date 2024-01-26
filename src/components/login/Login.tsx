import { Alert } from 'react-native';
import * as Style from './Layout';
import { useState } from 'react';
import { getUserByCpf } from "../../Services/User-service";
import { useUserContext } from "../../Context/UserContext";

export const Login = ({navigation}:any)=>{
    const [users, setUsers] = useState<any>([]); 
    const [userCpf, setUserCpf] = useState<string>("");
    const {fetchUser} = useUserContext();


    const callHomeScreen = () => {
        navigation.navigate("Home");
    }
   
    const verifyCpf = async () =>{
       
        if(userCpf.length === 11){
                try {
                    Alert.alert("CredApp", "Carregando ...");
                    const result  = await getUserByCpf(userCpf)
               
                    if(result !== null){
                        Alert.alert("Bem vindo ao sistema", "Login realizado com sucesso");
                        fetchUser(result);
                        callHomeScreen();
                    }
                } catch (error) {
                    Alert.alert("Erro", "Usuário não encontrado ou sistema indisponível.");
                }
          

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
                            <Style.TouchableLogin onPress={()=>{verifyCpf()}}>
                                <Style.LoginText>Entrar</Style.LoginText>
                                
                            </Style.TouchableLogin>
                            <Style.TouchableLogin onPress={()=>{navigation.navigate("SignUp")}}>
                                <Style.LoginText>Cadastrar novo Usuário</Style.LoginText>
                            </Style.TouchableLogin>
                </Style.LoginContainer>

            </>
    );
}