import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'

const News = () => {
  const [count, setCount] = useState(0);
    return (
      <View style = { styles.container }>
        <Text> This is News view </Text>
        <Text> { count } </Text>
        <Button onPress = { () => { setCount(count+1) }} title="+" />
      </View>
    )
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default News