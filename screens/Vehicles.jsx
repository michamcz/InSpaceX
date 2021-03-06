import React, { useState } from 'react';
import {
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Vehicles = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text> This is News view </Text>
      <Text>
        {count}
      </Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="+"
      />
    </SafeAreaView>
  );
};

export default Vehicles;
