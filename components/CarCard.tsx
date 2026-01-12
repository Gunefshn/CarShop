import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Car } from '@/types/car';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  car: Car;
};
const CarCard = ({ car }: Props) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <View className="m-2 h-60 w-56 flex-1 justify-center rounded-xl bg-gray-200 p-3">
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <FontAwesome name={favorite ? 'heart' : 'heart-o'} size={24} color="black" />
      </TouchableOpacity>
      <Image source={car.image} resizeMode="contain" className="h-32 w-full self-center" />
      <Text className="text-lg font-semibold">{car.title}</Text>
      <View className="flex-row gap-3">
        <Text>{car.price}</Text>
        <Text>
          <FontAwesome name="star" size={15} color="gold" />
          {car.rate}
        </Text>
      </View>
    </View>
  );
};

export default CarCard;
