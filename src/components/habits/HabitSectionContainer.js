import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';

import SectionHeader from '../common/SectionHeader';
import Habit from './Habit';

const HabitSectionContainer = ({ time, color, habits, done, getHabitStreak, fetching }) => {
  return (
    <View>
      <SectionHeader text={time} />
      { fetching ? null :
      <View style={styles.sectionContainer}>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            color={color}
            name={habit.name}
            done={done}
            streak={getHabitStreak(habit.id)}
          />
        ))}
      </View>
      }
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

const mapStateToProps = (state) => {
  return {
    dates: state.habitsDates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datesActions: bindActionCreators(datesActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitSectionContainer);
