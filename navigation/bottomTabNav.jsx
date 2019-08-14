import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import Todo from '../components/Todo';
import News from '../components/News';

const BottomTabNav = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-rocket" color={tintColor} size={24} />
        ),
      },
    },
    Todo: {
      screen: Todo,
      navigationOptions: {
        title: 'Todo',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-wifi" color={tintColor} size={24} />
        ),
      },
    },
    News: {
      screen: News,
      navigationOptions: {
        title: 'News',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-journal" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    // animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#FFFFFF',
      style: {
        borderTopWidth: 0.5,
        backgroundColor: '#102027',
        height: 50,
      },
      indicatorStyle: {
        height: 2.3,
        backgroundColor: '#003174',
      },
      showIcon: true,
      showLabel: false
    },
  },
);

export default BottomTabNav;

