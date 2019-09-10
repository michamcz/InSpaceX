import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PrevMissions from './PrevMissions'
import { ScrollView } from 'react-native-gesture-handler';
import NextMission from './NextMission'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    fontFamily: "Audiowide",
    fontSize: 15,
    margin: 5,
    alignSelf: 'flex-start'
  }
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.headline}>
          NEXT LAUNCH
        </Text>
        <NextMission />
        <Text style={styles.headline}>
          PREVIOUS LAUNCHES
        </Text>
        <PrevMissions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
