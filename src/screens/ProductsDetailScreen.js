import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action';

const ProductsDetailScreen = () => {
    const products = useSelector((state) => state.products.selected);

    useEffect (() => {
        console.log(products);
    }, []);

    const dispatch = useDispatch();

    const handlerAddItemCart = () => dispatch(addItem(products));

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.title}>{products.name}</Text>
                <Text style={styles.description}>{products.description}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <View style={styles.button}>
                    <Button title='Agregar al carrito' onPress={handlerAddItemCart} />
                </View>
            </View>
        </View>
    );
};

export default ProductsDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    screen: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 25
    },

    description: {
        fontSize: 20,
    },

    price: {
        fontSize: 40,
        fontFamily: 'Anybody'
    },

    button: {
        marginTop: 15,
    },
})