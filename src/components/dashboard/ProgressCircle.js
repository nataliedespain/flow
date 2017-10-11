import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import colors from '../../styles/colors';


const ProgressCircle = ({ fill }) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <AnimatedCircularProgress
        size={200}
        width={20}
        fill={fill}
        tintColor={colors.blue}
        backgroundColor={colors.lightgray}
      >
        { fill => (
          <Text style={styles.points}>
            { Math.round((100 * fill) / 100) }%
          </Text>
        ) }
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 75,
    left: 56,
    width: 100,
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
    fontWeight: '700'
  },
});

export default ProgressCircle;
