import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Missions from './Missions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Missions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
