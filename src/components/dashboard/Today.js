import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Today = ({ progress }) => {
  const allDone = time => progress[time].count === progress[time].done;
  return (
    <View style={styles.todayContainer}>
      <View style={styles.todayItem}>
        <Icon
          name="check-circle"
          size={30}
          color={allDone('morning') ? colors.green : colors.gray}
        />
        <Text style={styles.todayText}>Morning</Text>
        <Text style={styles.todayData}>{progress.morning.done}/{progress.morning.count}</Text>
      </View>
      <View style={styles.todayItem}>
        <Icon
          name="check-circle"
          size={30}
          color={allDone('afternoon') ? colors.green : colors.gray}
        />
        <Text style={styles.todayText}>Afternoon</Text>
        <Text style={styles.todayData}>{progress.afternoon.done}/{progress.afternoon.count}</Text>
      </View>
      <View style={styles.todayItem}>
        <Icon
          name="check-circle"
          size={30}
          color={allDone('night') ? colors.green : colors.gray}
        />
        <Text style={styles.todayText}>Night</Text>
        <Text style={styles.todayData}>{progress.night.done}/{progress.night.count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todayContainer: {
    width: '100%',
    backgroundColor: colors.lightgray,
    padding: 15,
    marginBottom: 25,
  },
  todayItem: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
    shadowColor: colors.gray,
    shadowRadius: 20,
    shadowOffset: { height: 50, width: 100 }
  },
  todayText: {
    fontWeight: '700',
    fontSize: 15,
    padding: 7
  },
  todayData: {
    position: 'absolute',
    right: 15,
    top: 18,
    fontSize: 15,
    fontWeight: '500',
    color: colors.gray
  }
});

export default Today;
