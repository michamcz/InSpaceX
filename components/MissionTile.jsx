import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logoWhite from '../assets/logo-white.png'

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    maxWidth: '100%',
    backgroundColor: "#102027",
    marginBottom: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mission_succes: {
    backgroundColor: 'green',
    width: 4,
    height: '100%',
  },
  mission_fail: {
    backgroundColor: 'red',
    width: 4,
    height: '100%',
  },
  headlineText: {
    color: '#FFF',
    paddingTop: 8,
    paddingHorizontal: 10,
    fontSize: 15,
  }
})

const MissionTile = ({ launch }) => {
  const { mission_name, flight_number, links, launch_success, launch_date_utc, rocket, upcoming } = launch;

  return (
    <View style={styles.container} >
      <View style={upcoming ? {} : launch_success ? styles.mission_succes : styles.mission_fail}></View>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#102027', minWidth: '100%', }}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.headlineText}>
              {rocket.rocket_name}
            </Text>
            <Text style={styles.headlineText}>
              {launch_date_utc.slice(0, 10)}
            </Text>
          </View>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
          <View style={{ flex: 10, padding: 15, paddingTop: 8 }}>
            <Text style={{ fontFamily: 'Audiowide', fontSize: 21, flex: 2, color: "#62727B", }}>
              #{flight_number}
            </Text>
            <Text style={{ fontSize: 20, color: '#FFF', flex: 8 }}>
              {mission_name}
            </Text>
          </View>
          <Image source={(links.mission_patch_small !== null) ? { uri: links.mission_patch_small } : logoWhite} style={{ width: 55, height: 55, marginEnd: 15 }} />
        </View>
      </View>
    </View >
  );
};

export default MissionTile;