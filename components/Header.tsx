import { View, Text, Image } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Header = ({ fullname }: { fullname: string }) => {
  return (
    <View className="flex-row items-center justify-between gap-2">
      <View className="flex-row items-center gap-3">
        <Image source={require('@/assets/avatar.png')} className="h-16 w-16 rounded-full" />
        <View>
          <Text>Welcome 👋</Text>
          <Text className="text-xl font-semibold">{fullname}</Text>
        </View>
      </View>
      <View className="h-12 w-12 items-center justify-center rounded-full bg-white">
        <FontAwesome name="bell-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default Header;
