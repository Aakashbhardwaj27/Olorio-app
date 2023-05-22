import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PopularProducts = ({ products,suggestedProducts }) => {
  const navigation = useNavigation();

  const handleProductClick = (productData) => {
    navigation.navigate('ProductDetails', { productData,suggestedProducts });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Products</Text>
      <ScrollView horizontal={true}>
        {products.map((product) => (
          <TouchableOpacity key={product.id} style={styles.item} onPress={() => handleProductClick(product)}>
            <Image source={{ uri: product.image_url }} style={styles.image} />
            <Text style={styles.name}>{product.name.length>16?`${product.name.slice(0,17)}...`:product.name}</Text>
            <View>
              <Text style={styles.price}>₹{product.offerPrice?.replace("from","")}</Text>
              <Text style={styles.rating}>Rating: {product.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: '#D1B000',
  },
  item: {
    marginRight: 20,
   
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#FFED8A'
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
    color: 'grey',
  },
});

export default PopularProducts;
