import React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import {
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground
} from 'react-native';
import Settings from '../components/Settings';
import About from '../components/About';
import MainStackNav from './mainStackNav';
import blueLogo from '../assets/logo-white.png'
import bg1 from '../assets/bg1.jpg';

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <ImageBackground
      source={bg1}
      style={
        {
          height: 160,
          alignItems: 'center',
          justifyContent: 'center',
        }
      }
    >
      <Image
        style={{ height: 80, width: 100, marginBottom: -30 }}
        source={blueLogo}
      />
    </ImageBackground>
    <ScrollView>
      <DrawerItems
        {...props}
        getLabel={(scene) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 22, color: '#FFF', paddingVertical: 10, fontFamily: 'Audiowide' }}>
              {props.getLabel(scene)}
            </Text>
          </View>
        )}
      />
    </ScrollView>
  </View >
);

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: MainStackNav,
    },
    Settings: {
      screen: Settings,
    },
    About: {
      screen: About,
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

