import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Categorias" screenOptions={{
                headerStyle: { backgroundColor: Colors.secondary },
                headerTintColor: Colors.primary,
                headerTitleStyle: { fontWeight: 'bold' }

            }}>

                <Stack.Screen 
                name='Cart' 
                component={CartScreen} 
                options={{title: 'Carrito'}} 
                />
            </Stack.Navigator>
    )
}