
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import ShopNavigator from './ShopNavigator';
import CartNavigator from "./CartNavigator";
import { StyleSheet, View } from "react-native";
import OrderNavigator from './OrderNavigator';

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
            <BottomTabs.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}>

                <BottomTabs.Screen
                    name='ShopTab'
                    component={ShopNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                                <Ionicons name="home" size={20} color='black' />
                            </View>
                        ),
                    }}
                />

                <BottomTabs.Screen
                    name='CartTab'
                    component={CartNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                                <Ionicons name="cart" size={20} color='black' />
                            </View>
                        ),
                    }} />

                <BottomTabs.Screen
                    name='OrdersTab'
                    component={OrderNavigator}
                    options={{
                        tabBarIcon: ({ focus }) => (
                            <View style={styles.item}>
                                <FontAwesome name="list" size={20} color='black' />
                            </View>
                        ),
                    }} />
            </BottomTabs.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 60,
    },

    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})