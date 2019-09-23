import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import axios from 'axios';
import defaultPatch from '../assets/defaultPatch.png'
import useLeftTime from '../utils/leftTimeHook'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  },
  error: {
    fontSize: 20,
    color: '#FFF',
    alignSelf: 'center',
    padding: 10
  }
});

const NextMissionTile = ({ launch, props }) => {
  const { mission_name, flight_number, links, launch_date_utc, rocket, launch_site } = launch;
  const timeLeft = useLeftTime(launch_date_utc);

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Details", { launch })}>
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
          <Image source={(links.mission_patch_small !== null) ? { uri: links.mission_patch_small } : defaultPatch} style={{ width: 80, height: 80, marginEnd: 15 }} />
        </View>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ fontSize: 25, color: '#FFF', paddingBottom: 10, fontFamily: 'Audiowide' }}>
            {`T- ${timeLeft.days} d ${timeLeft.hours} h ${timeLeft.minutes} m`}
          </Text>
          <Text style={{ fontSize: 12, color: '#FFF', paddingBottom: 10, fontFamily: 'Audiowide' }}>
            {launch_site.site_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const NextMissions = ({ props }) => {
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
    hasError ? (
      <Text style={styles.error}> Unable to load next mission :( </Text>
    ) : (
        <View style={{ flex: 1 }}>
          {
            nextLaunch ? (
              <NextMissionTile launch={nextLaunch} props={props} />
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
      )
  );
};

export default NextMissions;
