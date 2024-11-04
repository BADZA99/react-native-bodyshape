import { View, Text } from 'react-native'
import React from 'react'
// import { useFonts } from "expo-font";

import {
  useFonts,
//   Caveat_400Regular,
//   Caveat_500Medium,
//   Caveat_600SemiBold,
  Caveat_700Bold,
} from "@expo-google-fonts/caveat";
const Welcome = () => {
    let [fontsLoaded] = useFonts({
    //   Caveat_400Regular,
    //   Caveat_500Medium,
    //   Caveat_600SemiBold,
      Caveat_700Bold,
    });

      if (!fontsLoaded) {
        console.log("error font not loaded");
      }
  return (
    <View>
      <Text
        style={{
          fontFamily: "Bowlby",
          fontSize: 35,
          color: "#92400e",
          textAlign: "center",
          fontFamily: "Caveat_700Bold",
        }}
      >
        Welcome
      </Text>
    </View>
  );
}

export default Welcome