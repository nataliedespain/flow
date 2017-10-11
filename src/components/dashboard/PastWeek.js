import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import * as Animatable from 'react-native-animatable';

const PastWeek = ({ getPastWeek }) => {
  return (
    <View style={styles.weekContainer}>
      {
        getPastWeek().map(data => (
          <View key={data.day} style={styles.dayContainer}>
            <Animatable.View
              animation={{
                from: { height: 0 },
                to: { height: data.percent * 0.5 },
              }}
              style={styles.bar}
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
    minHeight: 100,
    backgroundColor: colors.lightgray,
    padding: 15,
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
  bar: {
    width: 7,
    backgroundColor: colors.blue
  },
  text: {
    paddingTop: 5,
    fontWeight: '500',
    fontSize: 11
  }
});

export default PastWeek;
