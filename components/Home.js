import React, { useState } from 'react';
import { Text, View, Button } from 'react-native'

const Home = () => {
  const [count, setCount] = useState(0);
    return (
      <View>
        <Text> { count } </Text>
        <Button onPress = { () => { setCount(count+1) }} title="+" />
      </View>
    )
  }

export default Home