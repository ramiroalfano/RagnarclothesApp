import { FlatList } from 'react-native'
import React from 'react'
import ProductsItem from '../components/ProductsItem'
import { useSelector, useDispatch, connect } from 'react-redux'
import {filteredProducts, selectProducts} from '../store/actions/products.action'
import { useEffect } from 'react'


const CategoryProductsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories.selected)
    const categoryProducts = useSelector ((state) => state.products.filteredProducts)

    useEffect(() => {
        dispatch(filteredProducts(category.id));
    }, [])
    

    const handleSelectedCategory = (item) => {
        dispatch(selectProducts(item.id))
        navigation.navigate('Detalle', {
            name: item.name,
        })
    }

    const renderProductsItem = ({ item }) => (
        <ProductsItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <FlatList
            data={categoryProducts}
            keyExtractor={(item) => item.id}
            renderItem={renderProductsItem}
        />
    )
}

export default connect()(CategoryProductsScreen)
