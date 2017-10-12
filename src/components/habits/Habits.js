import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';
import colors from '../../styles/colors';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';
import * as habitsActions from '../../actions/habits';
import * as toggle from '../../actions/toggleNewHabit';

import HabitsHeader from './HabitsHeader';
import NewHabit from './NewHabit';
import HabitSectionContainer from './HabitSectionContainer';

class Habits extends React.Component {
  static navigationOptions = () => ({
    title: 'Flow',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontSize: 20
    }
  });
  componentDidMount() {
    const uid = 'mrjztrr7AoQgIN6cxabjDZ3GWJV2';
    this.props.datesActions.getDates(uid);
    this.props.habitsActions.getHabits();
  }
  getHabitsByTime = (time) => {
    const uid = 'mrjztrr7AoQgIN6cxabjDZ3GWJV2';
    return this.props.habits.data
      .filter(habit => habit.user_id === uid && habit.time === time);
  }
  getHabitStreak = (id) => {
    const dates = this.props.dates.data
      .filter(date => date.habit_id === id)
      .map(date => this.dateParse(date.date));
    if (dates.includes(moment().subtract(1, 'days').format('YYYY-MM-DD')) === false) return 0;
    let count = 0;
    let i = 2;
    while (dates.includes(moment().subtract(i, 'days').format('YYYY-MM-DD'))) {
      count += 1;
      i += 1;
    }
    return count;
  }
  isDoneTodayByTime = (time) => {
    const uid = 'mrjztrr7AoQgIN6cxabjDZ3GWJV2';
    const habits = this.props.habits.data.filter(habit => habit.user_id === uid);
    const done = habits.filter(habit => (habit.time === time) && this.isDoneToday(habit.id)).length;
    const count = habits.filter(habit => habit.time === time).length;
    return done === count;
  }
  isDoneToday = (id) => {
    const done = this.props.dates.data
      .filter(date => this.dateParse(date.date) === moment().format('YYYY-MM-DD'))
      .filter(date => date.habit_id === id);
    return done.length > 0;
  }
  dateParse = (date) => {
    return date.substring(0, date.indexOf('T'));
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <HabitsHeader toggleForm={this.props.toggle.toggleNewHabit} />
        {this.props.formToggled ? <NewHabit /> : null}
        {this.props.habits.isFetching ? null : <View>
          <HabitSectionContainer
            time="Morning"
            color={colors.red}
            habits={this.getHabitsByTime(1)}
            done={this.isDoneTodayByTime(1)}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
          />
          <HabitSectionContainer
            time="Afternoon"
            color={colors.yellow}
            habits={this.getHabitsByTime(2)}
            done={this.isDoneTodayByTime(2)}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
          />
          <HabitSectionContainer
            time="Night"
            color={colors.green}
            habits={this.getHabitsByTime(3)}
            done={this.isDoneTodayByTime(3)}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
          />
        </View>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 25
  }
});

const mapStateToProps = (state) => {
  return {
    dates: state.habitsDates,
    habits: state.habits,
    formToggled: state.toggleNewHabit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datesActions: bindActionCreators(datesActions, dispatch),
    habitsActions: bindActionCreators(habitsActions, dispatch),
    toggle: bindActionCreators(toggle, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
