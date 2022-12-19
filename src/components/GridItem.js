import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const GridItem = ({ item, onSelected}) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ ...styles.container, backgroundColor: '#fff' }}
                onPress={() => {
                    onSelected(item)
                }}
            >
                <View>
                    <Image 
                    source={item.image}
                    style={styles.image} />
                </View>
                
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 170,
    },

    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },

    title: {
        fontFamily: 'Anybody',
        marginTop: 10,
        textTransform: 'uppercase',
    },

    image: {
        width: 160, 
        height: 120,
    }
})