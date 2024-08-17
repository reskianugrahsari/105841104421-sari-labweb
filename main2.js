import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Main2() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('./assets/wn.jpg')} 
                    style={styles.headerImage} 
                />
                <Text style={styles.headerText}>Street clothes</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Sale</Text>
                <Text style={styles.sectionSubtitle}>Super summer sale</Text>
                <View style={styles.productRow}>
                    <View style={styles.productCard}>
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>-20%</Text>
                        </View>
                        <Image 
                            source={require('./assets/dre.jpg')} 
                            style={styles.productImage} 
                        />
                        <Text style={styles.productName}>Evening Dress</Text>
                        <Text style={styles.productBrand}>Dorothy Perkins</Text>
                        <Text style={styles.productPriceOld}>15$</Text>
                        <Text style={styles.productPriceNew}>12$</Text>
                    </View>
                    <View style={styles.productCard}>
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>-15%</Text>
                        </View>
                        <Image 
                            source={require('./assets/dres.jpg')} 
                            style={styles.productImage} 
                        />
                        <Text style={styles.productName}>Sport Dress</Text>
                        <Text style={styles.productBrand}>Silly</Text>
                        <Text style={styles.productPriceOld}>22$</Text>
                        <Text style={styles.productPriceNew}>19$</Text>
                    </View>
                </View>
            </View>

            {/* New Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>New</Text>
                <Text style={styles.sectionSubtitle}>You've never seen it before!</Text>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text>Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: 200,
    },
    headerText: {
        position: 'absolute',
        bottom: 10,
        left: 100,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#aaa',
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 10,
        position: 'relative', 
    },
    discountBadge: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#ff6f61',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        zIndex: 1,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productBrand: {
        fontSize: 14,
        color: '#aaa',
    },
    productPriceOld: {
        fontSize: 14,
        color: '#aaa',
        textDecorationLine: 'line-through',
    },
    productPriceNew: {
        fontSize: 16,
        color: '#f00',
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f8f8f8',
    },
    navItem: {
        alignItems: 'center',
    },
});
