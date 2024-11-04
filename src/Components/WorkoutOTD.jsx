import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const otd=require('../../assets/workoutOTD.jpg')
  import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  } from "@expo-google-fonts/lato";

const WorkoutOTD = () => {
      let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
      });

      if (!fontsLoaded) {
        console.log("error font not loaded");
        }
  
  return (
    <TouchableOpacity className="flex justify-center items-center">
      <View className="rounded-3xl overflow-hidden h-40 w-[80%] ">
        <ImageBackground
          source={otd}
          resizeMode="cover"
          className="flex-1 justify-center items-center"
        >
          <View>
            <Text
              className="text-white/70 text-center text-3xl tracking-light"
              style={{ fontFamily: 'Lato_400Regular' }}
            >
              Workout of the day
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default WorkoutOTD