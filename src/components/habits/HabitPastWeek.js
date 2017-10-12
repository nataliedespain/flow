import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

const HabitPastWeek = ({ getPastWeek }) => {
  return (
    <View style={styles.weekContainer}>
      {
        getPastWeek().map(data => (
          <View key={data.day} style={styles.dayContainer}>
            <Animatable.View
              animation="bounceIn"
              style={[
                styles.circle,
                { backgroundColor: data.done ? colors.blue : colors.gray }
              ]}
            />
            <Text key={data.day} style={styles.text}>{data.day.toUpperCase()}</Text>
          </View>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    maxHeight: 80,
    backgroundColor: colors.lightgray,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayContainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue
  },
  text: {
    paddingTop: 10,
    fontWeight: '500',
    fontSize: 11
  }
});

export default HabitPastWeek;
