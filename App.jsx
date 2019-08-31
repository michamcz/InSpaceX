import { AppLoading } from 'expo';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-navigation'
import DrawerNav from './navigation/drawerNav';
import * as Font from 'expo-font';

const App = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setFontLoaded)}
      />
    );
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#102027' }} forceInset={{ 'top': 'never' }}>
        <DrawerNav />
      </SafeAreaView>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'Audiowide': require('./assets/fonts/Audiowide-Regular.ttf')
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setFontLoaded) {
  setFontLoaded(true);
}

export default App;
