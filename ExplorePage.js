import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const getRandomProducts = (productList) => {
    // Copy the product list to avoid mutating the original array
    const products = [...productList];
  
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = products.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [products[i], products[j]] = [products[j], products[i]];
    }
  
    // Return the first 10 products from the shuffled array
    return products.slice(0, 20);
  };
const ExplorePage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://commerce.mhiservers2.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

    const handleProductClick = (productData) => {
      const suggestedProducts=getRandomProducts(products)
    navigation.navigate('ProductDetails', { productData,suggestedProducts });
  };
  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render each product item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={()=>{handleProductClick(item)}}>
      <Image source={{ uri: item.image_url }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: {item.offerPrice}</Text>
    
    </TouchableOpacity>
  );

    return (
      
             
    <View style={styles.container}>
    <TextInput
        style={styles.searchInput}
        placeholder="Search products"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',   
    },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  productList: {
    paddingHorizontal: 16,
      paddingTop: 8,
      flexDirection: 'row',
      flexWrap: 'wrap',
        justifyContent:'space-evenly'
  },
    productItem: {
        width: 170,
        height:200,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
        elevation: 2,
        margin: 1,
        overflow: 'hidden',
        paddingVertical:5

  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#555555',
  },
});

export default ExplorePage;
