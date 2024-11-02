import "./global.css";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Human } from "./src/Components/Human.jsx";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
// npx expo start --port 19000

export default function App() {
  const [age, setAge] = React.useState(0);

  function increaseAge() {
    setAge(age + 1);
    if (age > 30) {
      Alert.alert("You are not allowed to increase your age");
    }
    console.log(age);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human />
        <TouchableOpacity onPress={increaseAge}>
          <Text style={{ fontSize: 20 }}>augmenter</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: "blue" }}>Age: {age}</Text>
      </SafeAreaView>
      {Platform.OS === "android" && (
        <Text style={{ fontSize: 20, color: "blue" }}>hello fron android</Text>
      )}
      {Platform.OS === "ios" && (
        <Text style={{ fontSize: 20, color: "blue" }}>hello fron ios</Text>
      )}

      <View className="flex-1 items-center justify-center bg-gray-600">
        <Text className="text-yellow-200 text-3xl">Hey! Welcome.</Text>
      </View>
    </SafeAreaProvider>
  );
}
