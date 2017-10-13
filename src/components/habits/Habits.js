import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';
import * as habitsActions from '../../actions/habits';
import * as toggle from '../../actions/toggle';

import LoadingScreen from '../common/LoadingScreen';
import HabitsHeader from './HabitsHeader';
import NewHabit from './NewHabit';
import HabitSectionContainer from './HabitSectionContainer';

class Habits extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Flow',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontSize: 20
    },
    headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><Text>&nbsp;&nbsp;<Icon marginLeft={15} name="angle-left" size={35} color={colors.gray} /></Text></TouchableOpacity>
  })
  componentDidMount() {
    this.props.datesActions.getDates(this.props.login.uid);
    this.props.habitsActions.getHabits();
  }
  getHabitsByTime = (time) => {
    return this.props.habits.data
      .filter(habit => habit.user_id === this.props.login.uid && habit.time === time);
  }
  getHabitStreak = (id) => {
    const dates = this.props.dates.data
      .filter(date => date.habit_id === id)
      .map(date => this.dateParse(date.date));
    if (dates.includes(moment().subtract(1, 'days').format('YYYY-MM-DD')) === false) return 0;
    let count = 1;
    let i = 2;
    while (dates.includes(moment().subtract(i, 'days').format('YYYY-MM-DD'))) {
      count += 1;
      i += 1;
    }
    return count;
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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <HabitsHeader
          toggleForm={this.props.toggle.toggleNewHabit}
          formToggled={this.props.formToggled}
        />
        {this.props.formToggled ? <NewHabit /> : null}
        {this.props.habits.isFetching ? <LoadingScreen /> : <View>
          <HabitSectionContainer
            time="Morning"
            color={colors.red}
            habits={this.getHabitsByTime(1)}
            isDoneToday={this.isDoneToday}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
            navigate={navigate}
          />
          <HabitSectionContainer
            time="Afternoon"
            color={colors.yellow}
            habits={this.getHabitsByTime(2)}
            isDoneToday={this.isDoneToday}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
            navigate={navigate}
          />
          <HabitSectionContainer
            time="Night"
            color={colors.green}
            habits={this.getHabitsByTime(3)}
            isDoneToday={this.isDoneToday}
            fetching={this.props.habits.isFetching}
            getHabitStreak={this.getHabitStreak}
            navigate={navigate}
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
    formToggled: state.toggle.toggleNew,
    login: state.login
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
