import { View, FlatList, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCars } from '@/hooks/useCars';
import { useBrands } from '@/hooks/useBrands';
import Header from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import { brands } from '@/data/brands';
import BrandCard from '@/components/BrandCard';
import CarCard from '@/components/CarCard';

const Index = () => {
  const { data: cars } = useCars();
  const { data: brands } = useBrands();
  return (
    <SafeAreaView className="flex-1 pb-56">
      <View className="mx-6 gap-6">
        <Header fullname="Gunef ŞAHİN" />
        <SearchInput />
        <FlatList
          data={brands}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BrandCard brand={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>
      <View className="mt-9 rounded-tl-3xl rounded-tr-3xl bg-white p-4">
        <View className="mx-2 flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Popular Car</Text>
          <Text className="text-gray-400">View All</Text>
        </View>
        <FlatList
          className="mt-6"
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarCard car={item} />}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
