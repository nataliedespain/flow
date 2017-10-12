import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';
import * as habitsActions from '../../actions/habits';

import Header from './Header';
import SectionHeader from '../common/SectionHeader';
import ProgressCircle from './ProgressCircle';
import PastWeek from './PastWeek';
import Today from './Today';

class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Flow',
    headerLeft: <Text>*</Text>,
    headerRight: <Button title="Habits" onPress={() => navigation.navigate('Habits')} />,
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
  getPastWeek = () => {
    const uid = 'mrjztrr7AoQgIN6cxabjDZ3GWJV2';
    const dates = [];
    for (let i = 1; i < 8; i += 1) {
      const day = moment().subtract(i, 'days').format('YYYY-MM-DD');
      dates.push({
        percent: this.findDailyPercent(uid, day),
        day: moment(day).format('ddd')
      });
    }
    return dates.reverse();
  }
  getDailyProgress = () => {
    const uid = 'mrjztrr7AoQgIN6cxabjDZ3GWJV2';
    const habits = this.props.habits.data.filter(habit => habit.user_id === uid);
    const morning = {
      done: habits.filter(habit => (habit.time === 1) && this.isDoneToday(habit.id)).length,
      count: habits.filter(habit => habit.time === 1).length
    };
    const afternoon = {
      done: habits.filter(habit => (habit.time === 2) && this.isDoneToday(habit.id)).length,
      count: habits.filter(habit => habit.time === 2).length
    };
    const night = {
      done: habits.filter(habit => (habit.time === 3) && this.isDoneToday(habit.id)).length,
      count: habits.filter(habit => habit.time === 3).length
    };
    return { morning, afternoon, night };
  }
  findDailyPercent = (uid, day) => {
    const dates = this.props.dates.data.filter(date => this.dateParse(date.date) === day).length;
    const habits = this.props.habits.data.filter(habit => habit.user_id === uid).length;
    return Math.round((dates / habits) * 100);
  }
  dateParse = (date) => {
    return date.substring(0, date.indexOf('T'));
  }
  isDoneToday = (id) => {
    const done = this.props.dates.data
      .filter(date => this.dateParse(date.date) === moment().format('YYYY-MM-DD'))
      .filter(date => date.habit_id === id);
    return done.length > 0;
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        {this.props.habits.isFetching ? null :
        <View>
          <SectionHeader text="Today's Goal" />
          <ProgressCircle fill={this.findDailyPercent('mrjztrr7AoQgIN6cxabjDZ3GWJV2', moment().format('YYYY-MM-DD'))} />
          <SectionHeader text="Past Week" />
          <PastWeek getPastWeek={this.getPastWeek} />
          <SectionHeader text="Today's Progress" />
          <Today progress={this.getDailyProgress()} />
        </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

const mapStateToProps = (state) => {
  return {
    dates: state.habitsDates,
    habits: state.habits,
    dailyPercent: state.dashboard
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
)(Dashboard);
