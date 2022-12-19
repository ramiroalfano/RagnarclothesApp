import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontWeight: 'bold' }

        }}>

            <Stack.Screen
                name='Login'
                component={AuthScreen}
            />
        </Stack.Navigator>
    )
}