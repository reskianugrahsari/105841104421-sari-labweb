import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ImageSlider from 'react-native-image-slider';

const App = () => {
    const images = [
        require('./assets/bl.jpg'),
        require('./assets/blu.jpg'),
        require('./assets/bls.jpg'),
    ];

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('./assets/blu.jpg')} style={styles.banner}>
                <Text style={styles.saleText}>Fashion sale</Text>
                <TouchableOpacity style={styles.checkButton}>
                    <Text style={styles.checkButtonText}>Check</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.newSection}>
                <Text style={styles.newTitle}>New</Text>
                <Text style={styles.newSubtitle}>You've never seen it before!</Text>
                <View style={styles.newItemsContainer}>
                    {images.slice(0, 3).map((image, index) => (
                        <View key={index} style={styles.newItem}>
                            <Image source={image} style={styles.newItemImage} />
                            <Text style={styles.newItemText}>New Item {index + 1}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        height: 320,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    saleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    checkButton: {
        marginTop: 10,
        backgroundColor: '#ff0000',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    newSection: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    newTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    newSubtitle: {
        fontSize: 16,
        color: '#888',
        marginVertical: 5,
    },
    newItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    newItem: {
        alignItems: 'center',
        width: '30%',
    },
    newItemImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    newItemText: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
    },
});

export default App;