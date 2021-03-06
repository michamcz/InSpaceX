import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Upcoming from '../screens/Upcoming';
// import Vehicles from '../screens/Vehicles';

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
      screen: Upcoming,
      navigationOptions: {
        title: 'Upcoming',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-wifi" color={tintColor} size={24} />
        ),
      },
    },
    // Vehicles: {
    //   screen: Vehicles,
    //   navigationOptions: {
    //     title: 'Vehicles',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="md-journal" color={tintColor} size={24} />
    //     ),
    //   },
    // },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
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
        backgroundColor: '#0159A3',
      },
      showIcon: true,
      showLabel: false
    },
  },
);

export default BottomTabNav;

