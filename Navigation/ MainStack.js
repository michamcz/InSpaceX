import React from 'react'
import BottomTabNavigator from './BottomTabNavigator'
import NoTab1 from '../components/NoTab1'
import NoTab2 from '../components/NoTab2'
import { createStackNavigator } from 'react-navigation'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const MainStack = createStackNavigator({
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
    screen: NoTab1
  },
  NoTab2: {
    screen: NoTab2
  },
},
{
  headerStyle: {
    backgroundColor: 'black', 
   }
});

export default MainStack