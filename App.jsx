import React from 'react'
import { SafeAreaView } from 'react-navigation'
import DrawerNav from './navigation/drawerNav';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#102027' }} forceInset={{ 'top': 'never' }}>
      <DrawerNav />
    </SafeAreaView>
  )
}
export default App;
