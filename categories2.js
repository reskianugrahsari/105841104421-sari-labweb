import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Categories2Page() {
  const categories = [
    "Tops",
    "Shirts & Blouses",
    "Cardigans & Sweaters",
    "Knitwear",
    "Blazers",
    "Outerwear",
    "Pants",
    "Jeans",
    "Shorts",
    "Skirts",
    "Dresses",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Choose category</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
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
  button: {
    backgroundColor: '#f00',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
    marginVertical: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  categoryItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 16,
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