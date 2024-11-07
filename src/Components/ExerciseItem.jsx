import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

import WorkoutData from '../../exercises.json'
import { FlashList } from '@shopify/flash-list'
const Exo = require("../../assets/Exo.jpg");
const ExerciseItem = () => {

const renderWorkoutItem = ({item}) => {
    return (
      <TouchableOpacity>
        <ImageBackground source={Exo}
        className=" h-44 w-40 rounded-2xl overflow-hidden bg-red-500 my-2 "
        >
          <View className="justify-between m-3 flex-1">
            <Text className="text-white font-medium tracking-wider">
              {item.category}
            </Text>
            <Text className="text-white text-sm">{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
}

const renderRow = ({ item, index }) => {
              if (index % 2 === 0) {
                const nextItem = WorkoutData[index + 1];
                return (
                  <View className=" flex-row justify-around  ">
                    {renderWorkoutItem({ item })}
                    {nextItem && renderWorkoutItem({ item: nextItem })}
                  </View>
                );
              } else {
                return null;
              }
};

  return (
    <View className="min-h-screen">
      <FlashList
        data={WorkoutData}
        renderItem={renderRow}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    </View>
  );
}

export default ExerciseItem