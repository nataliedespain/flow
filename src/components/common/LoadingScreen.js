import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

const LoadingScreen = () => {
  return (
    <View>
      <Animatable.View>
        <Text>Loading...</Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default LoadingScreen;
