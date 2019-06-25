import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'

const Todo = () => {
  const [count, setCount] = useState(0);
    return (
      <View>
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
  },
});

export default Todo;