import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import colors from '../../styles/colors';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as datesActions from '../../actions/habitsDates';
import * as habitsActions from '../../actions/habits';
import * as toggle from '../../actions/toggle';

import HabitHeader from './HabitHeader';
import EditHabit from './EditHabit';
import HabitInfo from './HabitInfo';
import SectionHeader from '../common/SectionHeader';
import HabitPastWeek from './HabitPastWeek';

class Habit extends React.Component {
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
  getThisMonth = (id) => {
    const thisMonth = {};
    const dates = this.props.dates.data
      .filter(date => date.habit_id === id)
      .map(date => this.dateParse(date.date));
    const today = moment().format('DD');
    for (let i = 0; i <= Number(today); i += 1) {
      const day = moment().subtract(i, 'days').format('YYYY-MM-DD');
      if (moment().format('YYYY-MM-DD') === day) {
        thisMonth[day] = { selected: true, marked: true };
      } else if (dates.includes(day)) {
        thisMonth[day] = { selected: true };
      }
    }
    return thisMonth;
  }
  getHabit = (id) => {
    return this.props.habits.data.filter(habit => habit.id === id)[0];
  }
  getPastWeek = () => {
    const { state } = this.props.navigation;
    const dates = [];
    for (let i = 1; i < 8; i += 1) {
      const day = moment().subtract(i, 'days').format('YYYY-MM-DD');
      dates.push({
        done: this.isDoneOnDate(state.params.habit.id, day),
        day: moment(day).format('ddd')
      });
    }
    return dates.reverse();
  }
  isDoneOnDate = (id, day) => {
    const done = this.props.dates.data
      .filter(date => this.dateParse(date.date) === day)
      .filter(date => date.habit_id === id);
    return done.length > 0;
  }
  dateParse = (date) => {
    return date.substring(0, date.indexOf('T'));
  }
  render() {
    const { state } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <HabitHeader
          name={this.getHabit(state.params.habit.id).name}
          toggleForm={this.props.toggle.toggleEditHabit}
          formToggled={this.props.formToggled}
        />
        {this.props.formToggled ? <EditHabit habit={this.getHabit(state.params.habit.id)} /> : null}
        <HabitInfo streak={state.params.streak} habit={this.getHabit(state.params.habit.id)} />
        <SectionHeader text="Past Week" />
        <HabitPastWeek getPastWeek={this.getPastWeek} />
        <SectionHeader text="This Month" />
        <View style={styles.calendarContainer}>
          <Calendar
            markedDates={this.getThisMonth(state.params.habit.id)}
            theme={{
              selectedDayBackgroundColor: colors.blue,
              textMonthFontFamily: 'Helvetica',
              textDayHeaderFontFamily: 'Helvetica',
            }}
            hideArrows
            disableMonthChange
          />
        </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 25
  },
  calendarContainer: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});

const mapStateToProps = (state) => {
  return {
    dates: state.habitsDates,
    habits: state.habits,
    formToggled: state.toggle.toggleEdit
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
)(Habit);
