import { Client } from "./src/Screens/Clientes";
import { Home } from "./src/Screens/Home";
import { LoginScreen } from "./src/Screens/Auth";
import { SignUpScreen } from "./src/Screens/SignUp";
import {OrderCardScreen} from './src/Screens/OrderScreen';
import { Produto } from "./src/Screens/Produtos";
import { Order } from "./src/Screens/Pedidos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserProvider } from "./src/Context/UserContext";
import { ClientProvider } from "./src/Context/ClientContext";
import { OrderProvider } from "./src/Context/OrderContext";
import { ProductProvider } from "./src/Context/ProductContext";
import { OrderCards } from "./src/Screens/OrderCard";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <OrderProvider>
        <ClientProvider>
          <UserProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={LoginScreen}
                ></Stack.Screen>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="SignUp"
                  component={SignUpScreen}
                ></Stack.Screen>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Home"
                  component={Home}
                ></Stack.Screen>
                <Stack.Screen 
                  options={{ headerShown: false }}
                    name="Clients" 
                  component={Client}>

                  </Stack.Screen>
                <Stack.Screen
                     options={{ headerShown: false }}
                  name="Products"
                  component={Produto}
                ></Stack.Screen>
                
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Order" 
                  component={Order}>
                  
                </Stack.Screen>
                <Stack.Screen
                  name="OrderCards" 
                  component={OrderCards}>
                </Stack.Screen>

                <Stack.Screen 
                  options={{ headerShown: false }}
                  name="OrderCardScreen" 
                  component={OrderCardScreen}>

                </Stack.Screen>
              </Stack.Navigator>
            </NavigationContainer>
          </UserProvider>
        </ClientProvider>
      </OrderProvider>
    </ProductProvider>
  );
}
