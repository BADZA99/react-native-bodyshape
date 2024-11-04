import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
const Welcome = () => {
      const [loaded, error] = useFonts({
        Bowlby: require("../../assets/fonts/Kameron-Bold.ttf"),
      });

      if (!loaded) {
        console.log("error", error);
      }
  return (
    <View>
      <Text
        style={{
          fontFamily: "Bowlby",
          fontSize: 27,
          color: "#92400e",
          textAlign: "center",
        }}
      >
        Welcome
      </Text>
    </View>
  );
}

export default Welcome