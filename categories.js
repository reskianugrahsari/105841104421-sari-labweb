import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function CategoriesPage() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Categories</Text>
            </View>
            <View style={styles.tabs}>
                <Text style={styles.activeTab}>Women</Text>
                <Text style={styles.tab}>Men</Text>
                <Text style={styles.tab}>Kids</Text>
            </View>
            
            <ScrollView>
                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>SUMMER SALES</Text>
                    <Text style={styles.bannerSubText}>Up to 50% off</Text>
                </View>
                <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>New</Text>
                    <Image style={styles.categoryImage} source={require('./assets/dre.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>Clothes</Text>
                    <Image style={styles.categoryImage} source={require('./assets/wom.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>Shoes</Text>
                    <Image style={styles.categoryImage} source={require('./assets/shoes.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>Accessories</Text>
                    <Image style={styles.categoryImage} source={require('./assets/aksesoris.png')} />
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 40,
        paddingBottom: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    tab: {
        fontSize: 16,
        color: '#aaa',
    },
    activeTab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 2,
        borderBottomColor: '#f00',
        paddingBottom: 5,
    },
    bannerContainer: {
        backgroundColor: '#f00',
        padding: 20,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    bannerSubText: {
        fontSize: 14,
        color: '#fff',
    },
    categoryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    categoryText: {
        fontSize: 18,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    navItem: {
        fontSize: 16,
        color: '#aaa',
    },
    activeNavItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f00',
    },
});
