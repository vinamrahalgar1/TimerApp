import React from 'react';
import {View, StyleSheet} from 'react-native';
import Timer from './Timer';

const App = () => {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
