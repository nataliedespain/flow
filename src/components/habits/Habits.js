import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';
import colors from '../../styles/colors';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';
import * as habitsActions from '../../actions/habits';

import HabitsHeader from './HabitsHeader'
import HabitSectionContainer from './HabitSectionContainer'

class Habits extends React.Component {
  static navigationOptions = ({ navigation }) => ({
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
        <HabitsHeader />
        {this.props.habits.isFetching ? null : <View>
          <HabitSectionContainer
            time="Morning"
            color={colors.red}
            habits={this.getHabitsByTime(1)}
            done={this.isDoneTodayByTime(1)}
          />
          <HabitSectionContainer
            time="Afternoon"
            color={colors.yellow}
            habits={this.getHabitsByTime(2)}
            done={this.isDoneTodayByTime(2)}
          />
          <HabitSectionContainer
            time="Night"
            color={colors.green}
            habits={this.getHabitsByTime(3)}
            done={this.isDoneTodayByTime(3)}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datesActions: bindActionCreators(datesActions, dispatch),
    habitsActions: bindActionCreators(habitsActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
