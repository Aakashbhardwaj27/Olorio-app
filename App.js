import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import OrderScreen from './OrderScreen';
import ProductDetailScreen from './ProductDetailsScreen';
import ExplorePage from './ExplorePage';
import VideoLibraryScreen from './FeelsLibrary';
import VideoRecordingScreen from './RecordVideo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductDetails" options={{ headerShown: false }} component={ProductDetailScreen} />
      <Stack.Screen name="Create"  options={{headerShown:false}} component={VideoRecordingScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Cart':
                iconName = 'shopping-cart';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              case 'Explore':
                iconName = 'search';
                break;
                case 'Feels':
                  iconName = 'video-library';
                  break;
              default:
                iconName = 'home';
                break;
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#D1B000',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" options={{headerShown:false }} component={HomeStack} />

        <Tab.Screen name="Explore" options={{headerTitleAlign:'center',headerTitleStyle:{fontSize:18}}} component={ExplorePage} />
        <Tab.Screen name="Feels" component={VideoLibraryScreen} />
        <Tab.Screen name="Cart" options={{headerTitle:'My Cart' }} component={CartScreen} />
        <Tab.Screen name="Profile" options={{headerTitle:'Account' }}  component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
