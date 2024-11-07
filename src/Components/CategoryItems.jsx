import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Beginner = require("../../assets/beginner.jpg");
const gentle=require('../../assets/gentle.jpg');
const intense=require('../../assets/itense.jpg');
const balance=require('../../assets/balance.jpg');
const moderate=require('../../assets/moderate.jpg');
const strength=require('../../assets/strength.jpg');
const toning=require('../../assets/toning.jpg');

const WorkoutData=[
    {id:1,ImgSource:Beginner,NumberOfExercises:9,Title:"Beginner"},
    {id:2,ImgSource:gentle,NumberOfExercises:7,Title:"Gentle"},
    {id:3,ImgSource:intense,NumberOfExercises:5,Title:"Intense"},
    {id:4,ImgSource:balance,NumberOfExercises:8,Title:"Balance"},
    {id:5,ImgSource:moderate,NumberOfExercises:23,Title:"Moderate"},
    {id:6,ImgSource:strength,NumberOfExercises:11,Title:"Strength"},
    {id:7,ImgSource:toning,NumberOfExercises:10,Title:"Toning"},
]
const renderWorkoutItem = ({ item }) => (
  <TouchableOpacity>
    <ImageBackground
      source={item.ImgSource}
      className="rounded-2xl overflow-hidden h-36 w-40 bg-red-500 mx-2 "
    >
      <View className="">
        <View>
          <FontAwesome5 name="dumbbell" size={15} color="white" />
          <Text className="">{item.NumberOfExercises}</Text>
        </View>
        <Text className="">{item.Title}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);
const CategoryItems = () => {
  return (
    <View>
      <FlatList
        data={WorkoutData}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CategoryItems