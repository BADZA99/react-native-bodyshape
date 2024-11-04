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

import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutScreen from "./src/Screens/WorkoutScreen";
import TimerScreen from "./src/Screens/TimerScreen";
import CalculationScreen from "./src/Screens/CalculationScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// npx expo start --port 19000

const tab=createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <tab.Navigator>
        <tab.Screen name="Workout" component={WorkoutScreen} />
        <tab.Screen name="Timer" component={TimerScreen} />
        <tab.Screen name="Calculation" component={CalculationScreen} />
      </tab.Navigator>
    );
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TanNav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
