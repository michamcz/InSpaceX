import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import axios from 'axios'
import { SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#37474F'
  },
  infoBarText: {
    fontSize: 20,
    color: '#FFF',
  },
  infoBarTextContent: {
    fontSize: 20,
    color: '#62727B',
    paddingBottom: 5
  },
  error: {
    fontSize: 20,
    color: '#FFF',
    alignSelf: 'center',
    padding: 10
  }
});

const Stats = () => {

  const [launches, setLaunches] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [hasError, setError] = useState(false);
  const [success, setSuccess] = useState(0);
  const [f1Launches, setF1Launches] = useState(0);
  const [f9Launches, setF9Launches] = useState(0);
  const [fHLaunches, setFHLaunches] = useState(0);
  const [succF1Launches, setSuccF1Launches] = useState(0);
  const [succF9Launches, setSuccF9Launches] = useState(0);
  const [succFHLaunches, setSuccFHLaunches] = useState(0);
  const [landSuccess, setLandSuccess] = useState(0);
  const [landIntent, setLandIntent] = useState(0);
  const [reused, setReused] = useState(0);
  const [payloadsMass, setPayloadsMass] = useState(0);
  const [payloads, setPayloads] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches/past?order=desc`);
        setLaunches(res.data);
        setIsComplete(true);
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    mapLaunches(launches);
  }, [isComplete])

  const mapLaunches = (launches) => {
    launches.forEach((launch) => {
      if (launch.launch_success) setSuccess(prev => prev + 1);
      if (launch.rocket.rocket_id === "falcon1") {
        setF1Launches(prev => prev + 1);
        if (launch.launch_success) setSuccF1Launches(prev => prev + 1);
      }
      else if (launch.rocket.rocket_id === "falcon9") {
        setF9Launches(prev => prev + 1);
        if (launch.launch_success) setSuccF9Launches(prev => prev + 1);
      }
      else if (launch.rocket.rocket_id === "falconheavy") {
        setFHLaunches(prev => prev + 1);
        if (launch.launch_success) setSuccFHLaunches(prev => prev + 1);
      }
      launch.rocket.first_stage.cores.forEach(core => {
        if (core.reused) setReused(prev => prev + 1);
        if (core.land_success) setLandSuccess(prev => prev + 1);
        if (core.landing_intent) setLandIntent(prev => prev + 1);
      })
      launch.rocket.second_stage.payloads.forEach(payload => {
        setPayloads(prev => prev + 1);
        setPayloadsMass(prev => prev + payload.payload_mass_kg)
      })
    });
  }

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
            STATISTICS
          </Text>
        </View>
        {
          hasError ? (
            <Text style={styles.error}> Something went wrong :( </Text>
          ) : (
              <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>Successful missions</Text>
                  <Text style={styles.infoBarTextContent}>
                    {success}/{launches.length} ({success ? Math.ceil((success / launches.length) * 100) : ''}%)
              </Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>F1 missions</Text>
                  <Text style={styles.infoBarTextContent}>
                    {succF1Launches}/{f1Launches} ({succF1Launches ? Math.ceil((succF1Launches / f1Launches) * 100) : ''}%)
              </Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>F9 missions</Text>
                  <Text style={styles.infoBarTextContent}>
                    {succF9Launches}/{f9Launches} ({succF9Launches ? Math.ceil((succF9Launches / f9Launches) * 100) : ''}%)
              </Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>FH missions</Text>
                  <Text style={styles.infoBarTextContent}>
                    {succFHLaunches}/{fHLaunches} ({succFHLaunches ? Math.ceil((succFHLaunches / fHLaunches) * 100) : ''}%)
              </Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>Successful landings</Text>
                  <Text style={styles.infoBarTextContent}>{landSuccess}/{landIntent} ({landSuccess ? Math.ceil((landSuccess / landIntent) * 100) : ''}%)</Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>Reused boosters</Text>
                  <Text style={styles.infoBarTextContent}>{reused ? reused : ''}</Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>Number of payloads</Text>
                  <Text style={styles.infoBarTextContent}>{payloads ? payloads : ''}</Text>
                </View>
                <View style={styles.infoBar}>
                  <Text style={styles.infoBarText}>Total payloads weight</Text>
                  <Text style={styles.infoBarTextContent}>{payloadsMass ? payloadsMass : ''} kg</Text>
                </View>
              </View>
            )
        }

      </ScrollView>
    </SafeAreaView>
  );
};

export default Stats;
