import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NoTab1 from '../components/NoTab1';
import NoTab2 from '../components/NoTab2';
import BottomTabNav from './bottomTabNav';
import wideLogo from '../assets/logo-wide.png'

const MainStackNav = createStackNavigator(
  {
    BottomTabNav: {
      screen: BottomTabNav,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="md-menu" size={30} color="white" paddingHorizontal="10" />
            </View>
          </TouchableOpacity>
        ),
        headerRight: (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 10,
              paddingBottom: 5,
            }}
          >
            <Image
              style={{ width: 180, height: 40 }}
              source={wideLogo}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0159A3',

        },
      }),
    },
    NoTab1: {
      screen: NoTab1,
    },
    NoTab2: {
      screen: NoTab2,
    },
  },
);

export default MainStackNav;

