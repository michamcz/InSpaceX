import { StyleSheet } from 'react-native';
import Home from './components/Home'
import Todo from './components/Todo'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Todo: {
    screen: Todo,
  },
});

export default createAppContainer(TabNavigator);



