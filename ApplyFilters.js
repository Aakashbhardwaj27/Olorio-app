import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { GLView } from 'expo-gl';

const ApplyFilters = ({ videoUri }) => {
  const videoRef = useRef(null);

  const applyFilter = () => {
    // Code to apply filters to the video
  };

  return (
    <View>
      <Video
        source={{ uri: videoUri }}
        style={{ height: 400 }}
        shouldPlay
        resizeMode="cover"
        ref={videoRef}
      />

      <TouchableOpacity onPress={applyFilter}>
        <Text>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplyFilters;
