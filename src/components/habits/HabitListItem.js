import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';

const HabitListItem = ({ color, habit, done, streak, datesActions, navigate }) => {
  const streakText = () => {
    if (streak === 1) {
      return `${streak} day in a row`;
    } else if (streak === 0) {
      return 'No streak';
    } else {
      return `${streak} days in a row`;
    }
  };
  return (
    <View style={[styles.sectionItem, { borderLeftColor: color }]}>
      <TouchableOpacity
        underlayColor="white"
        onPress={() => datesActions.addDate({ habit_id: habit.id, date: moment().format('YYYY-MM-DD') })}
      >
        <View
          style={done ? [styles.radioButton, { backgroundColor: colors.blue }] : styles.radioButton}
        />
      </TouchableOpacity>
      <View style={styles.habitTextContainer}>
        <Text style={styles.topText}>{habit.name}</Text>
        <Text style={styles.bottomText}>{streakText()}</Text>
      </View>
      <TouchableOpacity
        underlayColor="white"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={() => navigate('Habit', { name: habit.name, streak: streakText(), habit })}
      >
        <View style={styles.rightArrow}>
          <Icon
            name="angle-right"
            size={30}
            color={colors.gray}
          />
        </View>
      </TouchableOpacity>
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
    right: 5,
    top: 3,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    datesActions: bindActionCreators(datesActions, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HabitListItem);
