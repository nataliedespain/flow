import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const HabitInfo = ({ streak, habit }) => {
  const numToTime = (num) => {
    if (num === 1) {
      return ['Morning', colors.red];
    } else if (num === 2) {
      return ['Afternoon', colors.yellow];
    }
    return ['Night', colors.green];
  };
  return (
    <View style={styles.infoContainer}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={[styles.colorButton, { backgroundColor: numToTime(habit.time)[1] }]} />
        <Text style={styles.font}>
          {numToTime(habit.time)[0]}
        </Text>
      </View>
      <View>
        <Text style={styles.headerRightFont}>
          {streak}!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    maxHeight: 50,
    margin: 15,
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 20
  },
  font: {
    fontSize: 20,
    fontWeight: '700',
    height: 30
  },
  headerRightFont: {
    fontSize: 15,
    color: colors.gray,
    textAlign: 'right',
    paddingTop: 4
  },
});

export default HabitInfo;
