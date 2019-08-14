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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NoTab1 = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text> This is NoTab1 view </Text>
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

export default NoTab1;
