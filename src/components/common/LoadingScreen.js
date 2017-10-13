import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

const LoadingScreen = () => {
  return (
    <View>
      <View style={styles.sectionContainer}>
        <Animatable.View
          style={styles.loader}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    minHeight: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray
  }
});

export default LoadingScreen;
