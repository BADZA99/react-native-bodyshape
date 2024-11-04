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
// iconss
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

// npx expo start --port 19000

const tab=createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <tab.Navigator
      screenOptions={({route})=>({
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case "Workout":
              iconName ='dumbbell';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              case "Timer":
                iconName= 'timer-outline';
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                case "Calculation":
                  iconName = 'calculator';
                  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          }

        },
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "#f2c249",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "aqua",
        tabBarInactiveTintColor: "gray",
      })}
      >
        <tab.Screen name="Workout" component={WorkoutScreen} />
        <tab.Screen name="Timer" component={TimerScreen} />
        <tab.Screen name="Calculation" component={CalculationScreen} />
      </tab.Navigator>
    );
    }

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="TanNav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
