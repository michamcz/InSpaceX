import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import UpcmMissions from '../components/UpcmMissions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Upcoming = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ fontFamily: "Audiowide", fontSize: 15, margin: 5, alignSelf: 'flex-start' }}>
          UPCOMING LAUNCHES
        </Text>
        <UpcmMissions props={props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Upcoming;
