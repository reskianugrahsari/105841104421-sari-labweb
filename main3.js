import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Main3() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('./assets/search.png')} 
                style={styles.icon} 
            />
            <Text style={styles.text}>Finding similar results...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', 
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 30,
        tintColor: 'red', 
    },
    text: {
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold', 
        
    },
});
