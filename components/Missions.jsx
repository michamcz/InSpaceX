import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native'
import axios from 'axios';
import MissionTile from './MissionTile';

const Missions = () => {
  const [launches, setLaunches] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches/past?order=desc&limit=10&offset=${offset}`)
        setLaunches(oldlaunches => [...oldlaunches, ...res.data])
        setIsLoading(false);
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
    fetchData();
  }, [offset]);

  useEffect(() => {
    setOffset(launches.length);
  }, [isLoading])

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{ fontFamily: "Audiowide", fontSize: 20, margin: 5, alignSelf: 'center' }}>
        PREVIOUS LAUNCHES
      </Text>
      {/* {`offset: ${offset}, launches: ${launches.length} `} */}
      {launches ? (
        launches.map(launch => <MissionTile key={launch.flight_number} launch={launch} />)
      ) : null
      }
      {
        isLoading ? (
          <Text style={{ fontFamily: "Audiowide", fontSize: 20, margin: 5, alignSelf: 'center' }}>
            LOADING...
          </Text>
        ) : null
      }
    </ScrollView>
  );
};

export default Missions;