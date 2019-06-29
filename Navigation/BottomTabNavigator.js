import React from 'react'
import Home from '../components/Home'
import Todo from '../components/Todo'
import News from '../components/News'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from 'react-navigation'


const BottomTabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      ),
    }
  },
  Todo: {
    screen: Todo,
    navigationOptions: {
      title: 'Todo',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-checkmark-circle" color={tintColor} size={24} />
      ),
    },
  },
  News: {
    screen: News,
    navigationOptions: {
      title: 'News',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bookmark" color={tintColor} size={24} />
      ),
    },
  },
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        backgroundColor: '#000080',
        height: 50,
      },
      indicatorStyle: {
        height: 2.3,
        backgroundColor: 'black',
      },
      showIcon: true,
      showLabel: false
    },

  });

export default BottomTabNavigator;