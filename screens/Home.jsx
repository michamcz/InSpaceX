import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import NextMission from '../components/NextMission'
import PrevMissions from '../components/PrevMissions'


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

const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.headline}>
          NEXT LAUNCH
        </Text>
        <NextMission props={props} />
        <Text style={styles.headline}>
          PREVIOUS LAUNCHES
        </Text>
        <PrevMissions props={props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
