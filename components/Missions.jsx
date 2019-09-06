import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import axios from 'axios'

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
        setIsLoading(false)
      } catch (err) {
        setError(err)
        console.error(err);
      }
    }
    fetchData();
  }, [offset])

  useEffect(() => {
    setOffset(launches.length)
  }, [isLoading])

  return (
    <View>
      <Text>
        {`offset: ${offset} `}
        {`launches: ${launches.length} `}
        {launches ? launches.map(launch => launch.mission_name) : null}
      </Text>
    </View>
  );
};

export default Missions;
