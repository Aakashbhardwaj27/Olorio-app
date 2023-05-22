import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const handleMenuPress = () => {
    // handle menu press here
  };
  
  const handleProfilePress = () => {
    // handle profile press here
    navigation.navigate('Create');
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => handleMenuPress()} style={styles.headerButton}>
        <MaterialCommunityIcons name="menu" size={24} color="#D1B000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Olorio</Text>
      <TouchableOpacity onPress={() => handleProfilePress()} style={styles.headerButton}>
        <View style={styles.profileButton}>
        <Octicons name="video" size={18} color="#D1B000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};



const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 30,
    backgroundColor: 'transparent',
    elevation: 5,
    shadowColor: 'tomato',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
  
  },
  headerButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    elevation: 100,
    shadowColor: 'tomato',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D1B000'
  },
};

export default Header;
