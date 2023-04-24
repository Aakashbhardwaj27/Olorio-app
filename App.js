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
      <Stack.Screen name="ProductDetails"  options={{headerShown:false}} component={ProductDetailScreen} />
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
              case 'Order':
                iconName = 'history';
                break;
              default:
                iconName = 'home';
                break;
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" options={{headerShown:false }} component={HomeStack} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Order" component={OrderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
