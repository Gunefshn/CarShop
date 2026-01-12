import { View, Text, TextInput } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SearchInput = () => {
  return (
    <View className="flex-row items-center justify-between">
      <View className="h-12 w-full flex-row items-center gap-2 rounded-full bg-white p-2">
        <FontAwesome5 name="search" size={24} color="black" />
        <TextInput placeholder="Search your car"></TextInput>
      </View>
      <View className="absolute right-1 h-12 w-12 items-center justify-center rounded-full bg-black ">
        <MaterialCommunityIcons name="tune-variant" size={20} color="white" />
      </View>
    </View>
  );
};

export default SearchInput;
