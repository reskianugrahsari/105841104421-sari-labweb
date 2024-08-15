import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        title: 'T-Shirt SPANISH',
        price: '9$',
        image: 'https://via.placeholder.com/150',
        rating: 3,
        brand: 'Mango',
    },
    {
        id: '2',
        title: 'Blouse',
        price: '14$',
        oldPrice: '21$',
        discount: '-20%',
        image: 'https://via.placeholder.com/150',
        rating: 4,
        brand: 'Dorothy Perkins',
    },
    {
        id: '3',
        title: 'Shirt',
        price: '9$',
        image: 'https://via.placeholder.com/150',
        rating: 1,
        brand: 'Mango',
    },
    {
        id: '4',
        title: 'Light Blouse',
        price: '14$',
        oldPrice: '21$',
        discount: '-20%',
        image: 'https://via.placeholder.com/150',
        rating: 4,
        brand: 'Dorothy Perkins',
    },
];

const ProductItem = ({ item }) => (
    <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        {item.discount && (
            <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discount}</Text>
            </View>
        )}
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <View style={styles.ratingContainer}>
            {[...Array(5)].map((_, i) => (
                <Icon
                    key={i}
                    name="star"
                    type="font-awesome"
                    size={12}
                    color={i < item.rating ? '#ffd700' : '#ccc'}
                />
            ))}
        </View>
        <View style={styles.priceContainer}>
            {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
            <Text style={styles.productPrice}>{item.price}</Text>
        </View>
    </View>
);

export default function visual() {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    productList: {
        justifyContent: 'space-between',
    },
    productItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        alignItems: 'center',
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 10,
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#f00',
        padding: 5,
        borderRadius: 5,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productBrand: {
        fontSize: 12,
        color: '#777',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        color: '#888',
        marginRight: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
