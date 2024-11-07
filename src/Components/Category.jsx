import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import CategoryItems from './CategoryItems';

const Category = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center mx-10 mb-3">
        <Text className='text-xl font-bold'>Categories</Text>
        <AntDesign name="swapright" size={30} color="black" />
      </View>
      {/* category items */}
      <CategoryItems/>
    </View>
  );
}

export default Category