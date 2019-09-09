import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Missions from './Missions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62727B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Missions />
    </SafeAreaView>
  );
};

export default Home;
