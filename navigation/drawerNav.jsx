import React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NoTab1 from '../components/NoTab1';
import NoTab2 from '../components/NoTab2';
import MainStackNav from './mainStackNav';
import blueLogo from '../assets/logo-white.png'

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <LinearGradient
      colors={['#0159a3', '#014f97', '#01458b', '#013b80', '#003174']}
    >
      <View
        style={
          {
            height: 160,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#0159a3'
          }
        }
      >
        <Image
          style={{ height: 80, width: 100, marginBottom: -30 }}
          source={blueLogo}
        />
      </View>
    </LinearGradient>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
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
    overlayColor: 'rgba(0,0,0,0.4)',
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
        marginTop: 5,
      },
      labelStyle: {
        fontSize: 15,
        color: "#FFFFFF",
        // fontFamily: 'Audiowide'
      }
    }
  },
);

export default createAppContainer(DrawerNav);

