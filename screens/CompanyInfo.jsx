import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import spacexHQ from '../assets/spacexHQ.jpg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CompanyInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#37474F' }}>
          <Text style={{
            fontFamily: "Audiowide",
            fontSize: 15,
            margin: 5,
            alignSelf: 'flex-start'
          }}>
            COMPANY INFORMATIONS
          </Text>
        </View>
        <Image source={spacexHQ} style={{ height: 260, resizeMode: 'contain', maxWidth: '100%', }} />
        <Text style={{
          fontSize: 20,
          color: '#62727B',
          padding: 10,
          textAlign: 'justify',
        }}>
          SpaceX is a private US aerospace manufacturer and space transportation services company headquartered in Hawthorne, California.
          It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.
          SpaceX has developed the Falcon launch vehicle family and the Dragon spacecraft family.
          A major goal of SpaceX has been to develop a rapidly reusable launch system.
          SpaceX's achievements include the first privately funded liquid-propellant rocket to reach orbit (Falcon 1 in 2008),
          the first private company to successfully launch, orbit, and recover a spacecraft (Dragon in 2010),
          the first private company to send a spacecraft to the International Space Station (Dragon in 2012),
          the first propulsive landing for an orbital rocket (Falcon 9 in 2015), the first reuse of an orbital rocket (Falcon 9 in 2017),
          and the first private company to launch an object into orbit around the sun (Falcon Heavy's payload of a Tesla Roadster in 2018).  [wikipedia]
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompanyInfo;
