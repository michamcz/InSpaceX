import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from '../node_modules/react-native-vector-icons/Ionicons';
import NoTab1 from '../components/NoTab1';
import NoTab2 from '../components/NoTab2';
import BottomTabNavigator from './BottomTabNavigator';

const MainStack = createStackNavigator(
  {
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: ({ navigation }) => ({
        title: 'Back',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="md-menu" size={24} />
            </View>
          </TouchableOpacity>
        ),
        headerTitle: (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20 }}>App</Text>
            {/* <Image
            style={{ width: 50, height: 50 }}
            source={require('../images/logo.png')}
          /> */}
          </View>
        ),
      }),
    },
    NoTab1: {
      screen: NoTab1,
    },
    NoTab2: {
      screen: NoTab2,
    },
  },
  {
    headerStyle: {
      backgroundColor: 'black',
    },
  },
);

export default createAppContainer(MainStack);
