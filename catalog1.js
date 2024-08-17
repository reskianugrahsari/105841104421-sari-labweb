import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

export default function WomenTopsPage() {
  const items = [
    { id: '1', name: 'Pullover', brand: 'Mango', price: '51$', rating: 4.5, reviews: 3, source: require('./assets/vse.png') },
    { id: '2', name: 'Blouse', brand: 'Dorothy Perkins', price: '34$', rating: 0, reviews: 0, source: require('./assets/wr.png') },
    { id: '3', name: 'T-shirt', brand: 'LOST Ink', price: '12$', rating: 5, reviews: 10, source: require('./assets/ws.png') },
    { id: '4', name: 'Shirt', brand: 'Topshop', price: '51$', rating: 4, reviews: 3, source: require('./assets/wm.png') },
  ];

  return (
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingRight: 8 }}>
          <Image source={require('./assets/arrow.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333333', flex: 1, textAlign: 'center' }}></Text>
        <TouchableOpacity style={{ paddingLeft: 8 }}>
          <Image source={require('./assets/search.png')} style={{ width: 20, height: 20, tintColor: '#333333' }} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Women's tops</Text>
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
      </View>

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterOptionText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption}>
          <Text style={styles.sortOptionText}>Price: lowest to high</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.source} style={styles.itemImage} />
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
