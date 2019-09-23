import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Stats from '../screens/Stats';
import CompanyInfo from '../screens/CompanyInfo';
import Details from '../screens/Details'
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
              style={{ width: 165, height: 40 }}
              source={wideLogo}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#0159A3',
          height: 45,
        },
      }),
    },
    Stats: {
      screen: Stats,
      navigationOptions:
      {
        headerStyle: {
          backgroundColor: '#0159A3',
          height: 45,
        },
        headerTintColor: 'white',
      },
    },
    Company: {
      screen: CompanyInfo,
      navigationOptions:
      {
        headerStyle: {
          backgroundColor: '#0159A3',
          height: 45,
        },
        headerTintColor: 'white',
      },
    },
    Details: {
      screen: Details,
      navigationOptions:
      {
        headerStyle: {
          backgroundColor: '#0159A3',
          height: 45,
        },
        headerTintColor: 'white',
      },
    },
  },
);

export default MainStackNav;

