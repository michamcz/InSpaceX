import React from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import MainStack from './MainStack';
import NoTab1 from '../components/NoTab1';
import NoTab2 from '../components/NoTab2';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{ height: 140, alignItems: 'center', justifyContent: 'center' }}
    >
      {/* <Image
        source={require('../images/user.png')}
        style={{ height: 80, width: 80, borderRadius: 40 }}
      /> */}
      <Text
        style={{
          fontSize: 24,
          paddingTop: 10,
        }}
      >
        kappa
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
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
    drawerBackgroundColor: 'white',
  },
);

export default DrawerNavigator;
