import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Habit = ({ color, name, done, streak }) => {
  const streakText = () => {
    if (streak === 1) {
      return `${streak} day in a row`;
    } else if (streak === 0) {
      return 'No streak';
    } else {
      return `${streak} days in a row`;
    }
  }
  return (
    <View style={[styles.sectionItem, { borderLeftColor: color }]}>
      <View
        style={done ? [styles.radioButton, { backgroundColor: colors.blue }] : styles.radioButton}
      />
      <View style={styles.habitTextContainer}>
        <Text style={styles.topText}>{name}</Text>
        <Text style={styles.bottomText}>{streakText()}</Text>
      </View>
      <View style={styles.rightArrow}>
        <Icon
          name="angle-right"
          size={30}
          color={colors.gray}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionItem: {
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
    shadowColor: colors.gray,
    shadowRadius: 20,
    shadowOffset: { height: 50, width: 100 },
    borderLeftWidth: 5,
  },
  habitTextContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gray,
    marginRight: 10,
    marginTop: 7
  },
  topText: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 3
  },
  bottomText: {
    fontWeight: '400',
    color: colors.gray,
    fontSize: 13,
  },
  rightArrow: {
    position: 'absolute',
    right: 15,
    top: 10,
  },
});

export default Habit;
