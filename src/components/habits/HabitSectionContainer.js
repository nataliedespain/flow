import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';

import SectionHeader from '../common/SectionHeader';
import HabitListItem from './HabitListItem';

const HabitSectionContainer = ({ time, color, habits, isDoneToday, getHabitStreak, fetching, navigate }) => {
  return (
    <View>
      <SectionHeader text={time} />
      { fetching ? null :
      <View style={styles.sectionContainer}>
        {habits.map(habit => (
          <HabitListItem
            key={habit.id}
            color={color}
            habit={habit}
            done={isDoneToday(habit.id)}
            streak={getHabitStreak(habit.id)}
            navigate={navigate}
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
