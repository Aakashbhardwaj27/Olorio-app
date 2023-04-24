import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const offersData = [
  {
    id: 1,
    title: 'Summer Sale',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    title: 'Get 20% off',
    image: 'https://picsum.photos/id/238/300/200',
    },
    {
        id: 3,
        title: 'Summer Sale',
        image: 'https://picsum.photos/id/239/300/200',
      },
      {
        id: 4,
        title: 'Get 20% off',
        image: 'https://picsum.photos/id/240/300/200',
    },
    {
        id: 5,
        title: 'Summer Sale',
        image: 'https://picsum.photos/id/241/300/200',
      },
      {
        id: 6,
        title: 'Get 20% off',
        image: 'https://picsum.photos/id/242/300/200',
      },
];

const OfferArea = () => {
    const handleProductClick = (product) => {
        navigation.navigate('ProductDetails', { product });
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
              
            <View style={styles.offerContainer}>
              <Image source={{ uri: item.image }} style={styles.offerImage} />
              <Text style={styles.offerTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/id/239/600/200' }}
          style={styles.bannerImage}
        />
          </View>
          <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/id/238/600/200' }}
          style={styles.bannerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },  title: {
    fontSize: 20,
    fontWeight: 'bold',

    
    color:'tomato'
  },
  offersContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  offerContainer: {
    marginRight: 10,
    alignItems: 'center',
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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});

export default OfferArea;
