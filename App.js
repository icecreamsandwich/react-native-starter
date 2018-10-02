import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import HomeScreen from  './screens/HomeScreen';
import FirstContentScreen from  './screens/FirstContentScreen';
import SecondScreen from  './screens/SecondScreen';
import ThirdScreen from  './screens/ThirdScreen';


const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  First: {
    screen: FirstContentScreen,
    navigationOptions: {
      headerTitle: 'First page'
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      headerTitle: 'Second page'
    }
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {
      headerTitle: 'Third page'
    }
  }
})

export default App