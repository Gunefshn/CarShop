import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, //Sadece ikonların gözükmesi için
        tabBarStyle: {
          backgroundColor: 'black',
          borderRadius: 50,
          margin: 20,
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          // headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="heart" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="basket"
        options={{
          // headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-cart" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          // headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color="white" />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
