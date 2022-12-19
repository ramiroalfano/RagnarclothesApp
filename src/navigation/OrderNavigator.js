import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/colors";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: { backgroundColor: Colors.secondary },
                headerTintColor: Colors.primary,
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name='Orders'
                component={OrdersScreen}
                options={{
                    title: 'Ordenes',
                }} />
        </Stack.Navigator>
    )
}