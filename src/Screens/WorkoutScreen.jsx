import { View, Text } from 'react-native'
import React from 'react'
import Welcome from '../Components/Welcome'
import { SafeAreaView } from 'react-native-safe-area-context'


const WorkoutScreen = () => {
  
  return (
    <SafeAreaView>
    <Welcome />
    </SafeAreaView>
  )
}

export default WorkoutScreen