import { View, Text } from 'react-native'
import React from 'react'
import ExerciseItem from './ExerciseItem';


const Exercise = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-center mx-10 mb-3">
        <Text className="text-xl font-bold">Exercices</Text>
      </View>
      {/* category items */}
      <ExerciseItem />
    </View>
  );
}

export default Exercise