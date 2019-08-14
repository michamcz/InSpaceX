import React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import NoTab1 from '../components/NoTab1';
import NoTab2 from '../components/NoTab2';
import MainStackNav from './mainStackNav';
import blueLogo from '../assets/logo-white.png'

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{ height: 140, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        style={{ height: 80, width: 100 }}
        source={blueLogo}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DrawerNav = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStackNav,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    NoTab1: {
      screen: NoTab1,
    },
    NoTab2: {
      screen: NoTab2,
    },
  },
  {
    contentComponent: CustomDrawerComponent,
    drawerBackgroundColor: '#102027',
    contentOptions: {
      inactiveBackgroundColor: '#102027',
      activeBackgroundColor: '#102027',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 0.5,
      },
      itemStyle: {
        justifyContent: 'center',
        borderBottomColor: "#62727B",
        borderBottomWidth: 1,
      },
      labelStyle: {
        fontSize: 25,
        color: "#FFFFFF",
        // fontFamily: 'Audiowide'
      }
    }
  },
);

export default createAppContainer(DrawerNav);

