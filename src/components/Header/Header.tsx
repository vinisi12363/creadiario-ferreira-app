import { StatusBar } from "react-native";
import { HeaderContainer, HeaderTitle } from "./layout";



export const Header = () => {
    
    const username = "Fulano"
    return(
        <HeaderContainer>
            <HeaderTitle> Olá {username}</HeaderTitle>
        </HeaderContainer>

    );

}