import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import axios from 'axios';
import logoWhite from '../assets/logo-white.png'

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    maxWidth: '100%',
    backgroundColor: "#102027",
    marginBottom: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headlineText: {
    color: '#FFF',
    paddingTop: 8,
    paddingHorizontal: 10,
    fontSize: 15,
  }
});

const NextMissionTile = ({ launch }) => {
  const { mission_name, flight_number, links, launch_date_utc, rocket, launch_site } = launch;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#102027', minWidth: '100%', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
        <View style={{ flex: 1, padding: 15, paddingTop: 8, paddingBottom: 5 }}>
          <Text style={{ fontFamily: 'Audiowide', fontSize: 21, color: "#62727B", }}>
            #{flight_number}
          </Text>
          <Text style={{ fontSize: 20, color: '#FFF' }}>
            {mission_name}
          </Text>
        </View>
        <Image source={(links.mission_patch_small !== null) ? { uri: links.mission_patch_small } : logoWhite} style={{ width: 55, height: 55, marginEnd: 15 }} />
      </View>
      <View style={{ flex: 1, width: '100%', }}>
        <Text style={{ fontSize: 15, color: '#FFF', paddingLeft: 15, paddingBottom: 15 }}>
          Launch Site: {launch_site.site_name}
        </Text>
      </View>
    </View>
  )
}

const NextMissions = () => {
  const [nextLaunch, setNextLaunch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches/next`)
        setNextLaunch(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {
        nextLaunch ? (
          <NextMissionTile launch={nextLaunch} />
        ) : null
      }
      {
        isLoading ? (
          <Text style={{ fontFamily: "Audiowide", fontSize: 20, margin: 5, alignSelf: 'center' }}>
            LOADING...
          </Text>
        ) : null
      }
    </View>
  );
};

export default NextMissions;
