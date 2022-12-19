import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch} from 'react-redux'
import {removeItem, confirmCart} from '../store/actions/cart.action'
import React from 'react'


const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    const handleConfirmCart = () => {dispatch(confirmCart(items, total))}

    const handleDeleteItem = (id) => {dispatch(removeItem(id))}

    const renderCartItem = ({ item }) => (
        <CartItem item={item} onDelete={handleDeleteItem} />
    )
        
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCartItem}
                />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
                        <Text>Confirmar</Text>
                        <View style={styles.total}>
                            <Text>Total</Text>
                            <Text>{total}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
    },

    list: {
        flex: 1,
    },

    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },

    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    total: {
        flexDirection: 'row'
    },

    text: {
        fontSize: 18,
        padding: 8,
    },

})