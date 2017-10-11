import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import SectionHeader from '../common/SectionHeader';
import Habit from './Habit';

const HabitSectionContainer = ({ time, color, habits, done }) => {
  return (
    <View>
      <SectionHeader text={time} />
      <View style={styles.sectionContainer}>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            color={color}
            name={habit.name}
            done={done}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    backgroundColor: colors.lightgray,
    padding: 15,
  },
});

export default HabitSectionContainer;
