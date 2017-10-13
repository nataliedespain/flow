import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    headerLeft: null,
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Habits')}><Text><Icon marginLeft={15} name="angle-right" size={35} color={colors.gray} />&nbsp;&nbsp;</Text></TouchableOpacity>,
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontSize: 20
    }
  });
  componentDidMount() {
    this.props.habitsActions.getHabits();
    this.props.datesActions.getDates(this.props.login.uid);
  }
  getPastWeek = () => {
    const dates = [];
    for (let i = 1; i < 8; i += 1) {
      const day = moment().subtract(i, 'days').format('YYYY-MM-DD');
      dates.push({
        percent: this.getDailyPercent(day),
        day: moment(day).format('ddd'),
        date: day,
      });
    }
    return dates.reverse();
  }
  getDailyProgress = () => {
    const habits = this.props.habits.data.filter(habit => habit.user_id === this.props.login.uid);
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
  getDailyDone = (day) => {
    return this.props.dates.data.filter(date => this.dateParse(date.date) === day).length;
  }
  getDailyPercent = (day) => {
    const dates = this.props.dates.data.filter(date => this.dateParse(date.date) === day).length;
    const habits = this.props.habits.data.filter((habit) => {
      return habit.user_id === this.props.login.uid;
    }).length;
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
          <ProgressCircle fill={this.getDailyPercent(moment().format('YYYY-MM-DD'))} />
          <SectionHeader text="Past Week" />
          <PastWeek getPastWeek={this.getPastWeek} getDailyDone={this.getDailyDone} />
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
  },
  headerStyle: {
    marginLeft: 15,
    marginRight: 15
  }
});

const mapStateToProps = (state) => {
  return {
    dates: state.habitsDates,
    habits: state.habits,
    login: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datesActions: bindActionCreators(datesActions, dispatch),
    habitsActions: bindActionCreators(habitsActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
