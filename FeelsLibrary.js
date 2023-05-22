import { MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const VideoLibraryScreen = () => {
  // Mock video data
  const videos = [
    {
      id: '1',
      title: 'Video 1',
      thumbnail: 'https://commerce.mhiservers2.com/images/banner1.png',
      duration: '3:45',
    },
    {
      id: '2',
      title: 'Video 2',
      thumbnail: 'https://commerce.mhiservers2.com/images/banner2.png',
      duration: '2:30',
    },
    {
      id: '3',
      title: 'Video 3',
      thumbnail: 'https://commerce.mhiservers2.com/images/banner3.png',
      duration: '4:15',
      },
      {
        id: '4',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner4.png',
        duration: '4:15',
      },
      {
        id: '5',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner4.png',
        duration: '4:15',
      },
      {
        id: '6',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner3.png',
        duration: '4:15',
      }, {
        id: '7',
        title: 'Video 1',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner2.png',
        duration: '3:45',
      },
      {
        id: '9',
        title: 'Video 2',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner1.png',
        duration: '2:30',
      },
      {
        id: '10',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner4.png',
        duration: '4:15',
        },
        {
          id: '11',
          title: 'Video 3',
          thumbnail: 'https://commerce.mhiservers2.com/images/banner3.png',
          duration: '4:15',
        },
        {
          id: '12',
          title: 'Video 3',
          thumbnail: 'https://commerce.mhiservers2.com/images/banner2.png',
          duration: '4:15',
        },
        {
          id: '13',
          title: 'Video 3',
          thumbnail: 'https://commerce.mhiservers2.com/images/banner4.png',
          duration: '4:15',
      },
      {
        id: '14',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner3.png',
        duration: '4:15',
      },
      {
        id: '15',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner2.png',
        duration: '4:15',
      },
      {
        id: '16',
        title: 'Video 3',
        thumbnail: 'https://commerce.mhiservers2.com/images/banner4.png',
        duration: '4:15',
      },
    // Add more video objects here
  ];
  const [searchQuery, setSearchQuery] = useState('');

  // Render each video item in the list
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.videoInfo}>
      <MaterialIcons name="play-circle-fill" size={24} color="white" />
        <Text style={styles.videoDuration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
           <TextInput
        style={styles.searchInput}
        placeholder="Search the feels"
        value={searchQuery}
        onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.headerButton}><View style={styles.profileButton}><Octicons  name="video" size={18} color="#D1B000" /></View></TouchableOpacity></View>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.videoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
    headerContainer: {
      display:'flex',flexDirection:'row'  ,alignItems:'center'
    },
    searchInput: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginLeft: 16,
        marginRight:5,
        marginVertical: 8,
        borderRadius: 8,
        flex: 0.95,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        
      },
  videoList: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  videoItem: {
    flex: 1,
    margin: 4,
    aspectRatio: 1,
  },
  thumbnail: {
    flex: 1,
    borderRadius: 8,
  },
  videoInfo: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
    paddingVertical: 4,
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  videoDuration: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default VideoLibraryScreen;
