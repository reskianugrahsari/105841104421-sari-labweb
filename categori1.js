import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

export default function WomenTopsPage() {
  // Data item
  const items = [
    { id: '1', name: 'Pullover', brand: 'Mango', price: '51$', rating: 4.5, reviews: 3, source: require('./assets/dre.jpg')},
    { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: '34$', rating: 0, reviews: 0, image: 'https://example.com/blouse.jpg' },
    { id: '3', name: 'T-shirt', brand: 'LOST Ink', price: '12$', rating: 5, reviews: 10, image: 'https://example.com/tshirt.jpg' },
    { id: '4', name: 'Shirt', brand: 'Topshop', price: '51$', rating: 4, reviews: 3, image: 'https://example.com/shirt.jpg' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Women's tops</Text>

      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>T-shirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Crop tops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Sleeveless</Text>
        </TouchableOpacity>
        {/* Add more filter buttons as needed */}
      </View>

      {/* Filter and sort options */}
      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterOptionText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Text style={styles.sortOptionText}>Price: lowest to high</Text>
        </TouchableOpacity>
      </View>

      {/* List of items */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemBrand}>{item.brand}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemRating}>
                {Array.from({ length: 5 }, (_, i) => (i < Math.round(item.rating) ? '★' : '☆')).join(' ')} ({item.reviews})
              </Text>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteIcon}>♡</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.activeNavItem}>Shop</Text>
        <Text style={styles.navItem}>Bag</Text>
        <Text style={styles.navItem}>Favorites</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterOptionText: {
    fontSize: 16,
    color: '#000',
  },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortOptionText: {
    fontSize: 16,
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemBrand: {
    fontSize: 14,
    color: '#777',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  itemRating: {
    fontSize: 14,
    color: '#f1c40f',
  },
  favoriteButton: {
    padding: 10,
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#f00',
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