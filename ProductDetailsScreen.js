import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetails = ({ navigation, route }) => {
  const { productData,suggestedProducts } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 300;
const [product,setProduct]=useState(productData)


  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };



    return (
      
      <ScrollView style={styles.container}>
           <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
           <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={{ uri: product.image_url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceCurrency}>₹</Text>
          <Text style={styles.price}>{product.offerPrice?.replace('from','')}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <Text style={styles.description} numberOfLines={showFullDescription ? undefined : 4}>
          {product.description.length > MAX_DESCRIPTION_LENGTH
            ? `${product.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
            : product.description}
        </Text>
        {product.description.length < MAX_DESCRIPTION_LENGTH && (
          <TouchableOpacity onPress={toggleDescription} style={styles.readMoreButton}>
            <Text style={styles.readMoreButtonText}>
              {showFullDescription ? 'Read Less' : 'Read More'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.suggestedProductsContainer}>
        <Text style={styles.suggestedProductsTitle}>Suggested Products</Text>
        <ScrollView horizontal={true}>
          {suggestedProducts.map((product) => (
            <TouchableOpacity key={product.id} style={styles.suggestedProductItem} onPress={()=>setProduct(product)} >
              <Image source={{ uri: product.image_url }} style={styles.suggestedProductImage} />
              <Text style={styles.suggestedProductName}>{product.name}</Text>
              <Text style={styles.suggestedProductPrice}>₹{product.offerPrice}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: 300,
      backgroundColor: '#FFED8A',
      marginTop:35
    },
    infoContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    priceCurrency: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#D1B000',
    },
    price: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#D1B000',
      marginLeft: 5,
    },
    description: {
      fontSize: 18,
      lineHeight: 26,
      marginBottom: 20,
    },
    readMoreButton: {
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      color: 'blue',
      fontWeight: 'bold',
    },
    addToCartButton: {
      backgroundColor: '#D1B000',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      marginBottom: 30,
      marginTop:20,
    },
    addToCartButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    suggestedProductsContainer: {
      backgroundColor: '#f2f2f2',
      padding: 20,
    },
    suggestedProductsTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    suggestedProductItem: {
      width: 170,
      height:250,
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
      paddingVertical: 5,
      marginHorizontal:5
    },
    suggestedProductImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
      marginBottom: 10,
    },
    suggestedProductName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    suggestedProductPrice: {
      fontSize: 14,
      color: 'grey',
      fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 999,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backdropFilter: 'blur(10px)',
      },
      backButtonIcon: {
        width: 20,
        height: 20,
        color: '#fff',
      },
      
  readMoreButtonText: {
        color:'red'
      }
      
  });


export default ProductDetails;
