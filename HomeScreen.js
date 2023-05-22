import axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Header from './Header';
import HeaderBanner from './HeaderBanner';
import OfferArea from './OfferArea';
import PopularProducts from './PopularProducts';
import ProductScreen from './ProductScreen';
import SearchBar from './SearchScreen';

const headerBanners = [
  'https://commerce.mhiservers2.com/images/banner4.png',
    'https://commerce.mhiservers2.com/images/banner1.png',
  'https://commerce.mhiservers2.com/images/banner2.png',
  'https://commerce.mhiservers2.com/images/banner3.png',
  


];
// const popularProducts = [
//     {
//       id: 1,
//       name: 'iPhone 13',
//       image: 'https://www.olorio.in/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F5412%2F8891%2Fproducts%2F1CH0395_1800x1800.png%3Fv%3D1659950753&w=1920&q=75',
//       price: '999',
//         rating: 4.5,
//       description:`The Samsung Galaxy S21 Ultra 5G is the ultimate smartphone for power users. With a stunning 6.8-inch Dynamic AMOLED display and a 120Hz refresh rate, everything you do on this phone will look incredibly smooth and crisp. The 5G connectivity means you can stream and download content at lightning-fast speeds, and the powerful Snapdragon 888 processor and 12GB of RAM ensure you can multitask without any lag.

//       The camera system on the Galaxy S21 Ultra 5G is truly impressive, with a quad-lens setup that includes a 108-megapixel main sensor, a 12-megapixel ultra-wide sensor, and two 10-megapixel telephoto sensors. You can capture incredibly detailed photos and videos, and the 100x Space Zoom feature lets you get up close to the action even from far away.
      
//       The phone has a large 5000mAh battery that can easily last all day, and it supports fast wired and wireless charging as well as reverse wireless charging. The phone runs on the latest version of Android with Samsung's One UI 3.1 on top, which offers a clean and intuitive user interface. If you're looking for the best of the best in terms of smartphones, the Samsung Galaxy S21 Ultra 5G is definitely worth considering.`
//     },
//     {
//       id: 2,
//       name: 'Samsung Galaxy S21',
//       image: 'https://www.olorio.in/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F5412%2F8891%2Fproducts%2F1CH0891_3a24aebf-884d-451a-9a32-8b8c145b2831_1800x1800.png%3Fv%3D1659949688&w=1920&q=75',
//       price: '899',
//         rating: 4.3,
//          description:`The Samsung Galaxy S21 Ultra 5G is the ultimate smartphone for power users. With a stunning 6.8-inch Dynamic AMOLED display and a 120Hz refresh rate, everything you do on this phone will look incredibly smooth and crisp. The 5G connectivity means you can stream and download content at lightning-fast speeds, and the powerful Snapdragon 888 processor and 12GB of RAM ensure you can multitask without any lag.

//       The camera system on the Galaxy S21 Ultra 5G is truly impressive, with a quad-lens setup that includes a 108-megapixel main sensor, a 12-megapixel ultra-wide sensor, and two 10-megapixel telephoto sensors. You can capture incredibly detailed photos and videos, and the 100x Space Zoom feature lets you get up close to the action even from far away.
      
//       The phone has a large 5000mAh battery that can easily last all day, and it supports fast wired and wireless charging as well as reverse wireless charging. The phone runs on the latest version of Android with Samsung's One UI 3.1 on top, which offers a clean and intuitive user interface. If you're looking for the best of the best in terms of smartphones, the Samsung Galaxy S21 Ultra 5G is definitely worth considering.`
    
//     },
//     {
//       id: 3,
//       name: 'MacBook Pro',
//       image: 'https://www.olorio.in/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F5412%2F8891%2Fproducts%2F1CH0257_1800x1800.jpg%3Fv%3D1659950748&w=1920&q=75',
//       price: '1,299',
//         rating: 4.8,
//         description:`The Samsung Galaxy S21 Ultra 5G is the ultimate smartphone for power users. With a stunning 6.8-inch Dynamic AMOLED display and a 120Hz refresh rate, everything you do on this phone will look incredibly smooth and crisp. The 5G connectivity means you can stream and download content at lightning-fast speeds, and the powerful Snapdragon 888 processor and 12GB of RAM ensure you can multitask without any lag.

//         The camera system on the Galaxy S21 Ultra 5G is truly impressive, with a quad-lens setup that includes a 108-megapixel main sensor, a 12-megapixel ultra-wide sensor, and two 10-megapixel telephoto sensors. You can capture incredibly detailed photos and videos, and the 100x Space Zoom feature lets you get up close to the action even from far away.
        
//         The phone has a large 5000mAh battery that can easily last all day, and it supports fast wired and wireless charging as well as reverse wireless charging. The phone runs on the latest version of Android with Samsung's One UI 3.1 on top, which offers a clean and intuitive user interface. If you're looking for the best of the best in terms of smartphones, the Samsung Galaxy S21 Ultra 5G is definitely worth considering.`
      
//     },
//     {
//       id: 4,
//       name: 'Sony Playstation 5',
//       image: 'https://www.olorio.in/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0656%2F5412%2F8891%2Fproducts%2F1CH1425_1800x1800.png%3Fv%3D1662128796&w=1920&q=75',
//       price: '499',
//         rating: 4.9,
//         description:`The Samsung Galaxy S21 Ultra 5G is the ultimate smartphone for power users. With a stunning 6.8-inch Dynamic AMOLED display and a 120Hz refresh rate, everything you do on this phone will look incredibly smooth and crisp. The 5G connectivity means you can stream and download content at lightning-fast speeds, and the powerful Snapdragon 888 processor and 12GB of RAM ensure you can multitask without any lag.

//         The camera system on the Galaxy S21 Ultra 5G is truly impressive, with a quad-lens setup that includes a 108-megapixel main sensor, a 12-megapixel ultra-wide sensor, and two 10-megapixel telephoto sensors. You can capture incredibly detailed photos and videos, and the 100x Space Zoom feature lets you get up close to the action even from far away.
        
//         The phone has a large 5000mAh battery that can easily last all day, and it supports fast wired and wireless charging as well as reverse wireless charging. The phone runs on the latest version of Android with Samsung's One UI 3.1 on top, which offers a clean and intuitive user interface. If you're looking for the best of the best in terms of smartphones, the Samsung Galaxy S21 Ultra 5G is definitely worth considering.`
      
//     },
//     {
//       id: 5,
//       name: 'Samsung QLED TV',
//       image: 'https://picsum.photos/id/240/300/200',
//       price: '1,499',
//         rating: 4.7,
//         description:`The Samsung Galaxy S21 Ultra 5G is the ultimate smartphone for power users. With a stunning 6.8-inch Dynamic AMOLED display and a 120Hz refresh rate, everything you do on this phone will look incredibly smooth and crisp. The 5G connectivity means you can stream and download content at lightning-fast speeds, and the powerful Snapdragon 888 processor and 12GB of RAM ensure you can multitask without any lag.

//         The camera system on the Galaxy S21 Ultra 5G is truly impressive, with a quad-lens setup that includes a 108-megapixel main sensor, a 12-megapixel ultra-wide sensor, and two 10-megapixel telephoto sensors. You can capture incredibly detailed photos and videos, and the 100x Space Zoom feature lets you get up close to the action even from far away.
        
//         The phone has a large 5000mAh battery that can easily last all day, and it supports fast wired and wireless charging as well as reverse wireless charging. The phone runs on the latest version of Android with Samsung's One UI 3.1 on top, which offers a clean and intuitive user interface. If you're looking for the best of the best in terms of smartphones, the Samsung Galaxy S21 Ultra 5G is definitely worth considering.`
      
//     }
// ];
  
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
  
const HomeScreen = () => {
  const [products, setProducts] = React.useState([]);
  const [popularProducts, setPopularProducts] = React.useState([]);
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

  useEffect(() => {
    const popular= getRandomProducts(products);
    setPopularProducts(popular)
  
  },[products])

  
  return (
      <ScrollView style={styles.container}>
          <Header />
          {/* <SearchBar onSearch={(e)=>{console.log(e)}} /> */}
    <View style={styles.banner}>
     <HeaderBanner images={headerBanners} />
    </View>

    <View style={styles.popularProductsContainer}>
    
     <PopularProducts products={popularProducts} suggestedProducts={getRandomProducts(products)} />
    </View>

    <OfferArea offersData={getRandomProducts(products)} suggestedProducts={getRandomProducts(products)} />

    <View style={styles.productsContainer}>
  
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
    height: 200,
   
    justifyContent: 'center',
      alignItems: 'center',

  },
  popularProductsContainer: {
    marginTop: 10,
      paddingHorizontal: 10,
    
  },
  popularProductsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offersContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  offerBanner: {
    width: '48%',
    height: 100,
    backgroundColor: '#ccc',
  },
  productsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bottomTabs: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default HomeScreen;
