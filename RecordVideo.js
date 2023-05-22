import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { MediaLibrary } from 'expo-media-library';
import { Video } from 'expo-av';
import { GLView } from 'expo-gl';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ControlPanel from './VideoControls';
import ApplyFilters from './ApplyFilters';

const VideoRecordingScreen = () => {
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUri, setVideoUri] = useState('');

  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

    
  const handleEdit = () => {
    // Handle edit option
  };

  const handleRecordAgain = () => {
    setVideoUri('');
  };

  const handleApplyFilter = () => {
    // Handle apply filter option
  
   return  <ApplyFilters videoUri={videoUri} />
  };

  const startRecording = async () => {
    setIsRecording(true);
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.recordAsync();
        console.log('Recorded video URI:', uri);
        setVideoUri(uri)
    }
  };

  const stopRecording = async () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <View style={{ display:'flex',flexDirection:'row',flex: 1,width:'100%',justifyContent:'center' }}>
     

      {videoUri !== '' ? (
        <View style={{ flex: 1 }}>
          <Video
            source={{ uri: videoUri }}
            style={{ flex: 1 }}
            shouldPlay
            resizeMode="cover"
            ref={videoRef}
          />
        </View>
      ):<Camera
      style={{ flex: 1 }}
      type={Camera.Constants.Type.front}
      ref={cameraRef}
    />}
<ControlPanel onEdit={handleEdit} onRecordAgain={handleRecordAgain} onApplyFilter={handleApplyFilter} />
      <TouchableOpacity style={{position:'absolute',bottom:10,display:'flex',alignItems:'center',justifyContent:'center',padding:10}} onPress={toggleRecording}>{isRecording ?<MaterialCommunityIcons name="pause-circle" size={48} color="#D1B000" />  :  <Ionicons name="play-circle" size={48} color="#D1B000" />}
   
      </TouchableOpacity>
    </View>
  );
};

export default VideoRecordingScreen;
