import { StatusBar } from "react-native";
import { HeaderContainer, HeaderTitle } from "./layout";
import { useUserContext } from "../../Context/UserContext";



export const Header = () => {
    const {user} = useUserContext();
    const username = user.nome
    return(
        <HeaderContainer>
            <HeaderTitle> Olá {username}</HeaderTitle>
        </HeaderContainer>

    );

}