import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ControlPanel = ({ onEdit, onRecordAgain, onApplyFilter }) => {
  return (
    <View style={{ flexDirection: 'column',alignItems: 'center',position:'absolute',right:10 ,bottom:50,  backgroundColor: 'rgba(0, 0, 0, 0.5)',borderRadius:50,padding:5}}>
      <TouchableOpacity onPress={onEdit} style={{ marginTop: 10,marginBottom:15 }}>
        <MaterialCommunityIcons name="pencil-outline" size={24} color="#D1B000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onRecordAgain} style={{ marginTop: 10,marginBottom:15 }}>
        <MaterialCommunityIcons name="record-circle" size={24} color="#D1B000" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onApplyFilter}  style={{ marginTop: 10,marginBottom:15 }}>
        <MaterialCommunityIcons name="filter-variant" size={24} color="#D1B000" />
          </TouchableOpacity>
          
    </View>
  );
};

export default ControlPanel;
