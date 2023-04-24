import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => handleMenuPress()} style={styles.headerButton}>
        <MaterialCommunityIcons name="menu" size={24} color="tomato" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Orizzel</Text>
      <TouchableOpacity onPress={() => handleProfilePress()} style={styles.headerButton}>
        <View style={styles.profileButton}>
          <MaterialCommunityIcons name="account" size={24} color="tomato" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const handleMenuPress = () => {
  // handle menu press here
};

const handleProfilePress = () => {
  // handle profile press here
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: 'transparent',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
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
    color: 'tomato'
  },
};

export default Header;
