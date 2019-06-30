import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text> This is Home view </Text>
      <Text>
        {count}
      </Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="+"
      />
    </View>
  );
};

export default Home;
