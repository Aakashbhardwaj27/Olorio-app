import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const OfferArea = ({ offersData ,suggestedProducts}) => {
  const navigation = useNavigation();


  const openInstagram = () => {
    const username = 'the_olorio'; // Replace with the Instagram username or profile ID
  
    Linking.openURL(`instagram://user?username=${username}`)
      .catch(() => {
        Linking.openURL(`https://www.instagram.com/${username}`);
      });
  };
  const openWhatsApp = () => {
    const phoneNumber = '9548309781'; // Replace with the recipient's phone number
  
    Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
  };
    const handleProductClick = (productData) => {
      navigation.navigate('ProductDetails', { productData,suggestedProducts });
      };
  return (
      <View style={styles.container}>
           <Text style={styles.title}>{"Exclusive Offers"}</Text>
      <View style={styles.offersContainer}>
        <FlatList
          horizontal
          data={offersData}
          keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
              
            <TouchableOpacity style={styles.offerContainer} onPress={() => handleProductClick(item)}>
              <Image source={{ uri: item.image_url }} style={styles.offerImage} />
              <Text style={styles.offerTitle}>{item.name.slice(0,10)}...</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.bannerContainer} onPress={openInstagram}>
        <Image
          source={{ uri: 'https://commerce.mhiservers2.com/images/instagram.png' }}
          style={styles.bannerImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bannerContainer} onPress={openWhatsApp}>
        <Image
          source={{ uri: 'https://commerce.mhiservers2.com/images/watsapp.png' }}
          style={styles.bannerImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

    
    color:'#D1B000'
  },
  offersContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  offerContainer: {
    marginRight: 10,
    alignItems: 'center',
    borderColor: '#D1B000',
    borderWidth: 0.25,
    padding: 5,
    borderRadius:5
  },
  offerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  offerTitle: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  bannerContainer: {
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default OfferArea;
