import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import moment from 'moment';

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
  static navigationOptions = {
    title: 'Flow',
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
      <View style={styles.container}>
        <HabitHeader
          name={state.params.name}
          toggleForm={this.props.toggle.toggleEditHabit}
          formToggled={this.props.formToggled}
        />
        {this.props.formToggled ? <EditHabit /> : null}
        <HabitInfo streak={state.params.streak} habit={state.params.habit} />
        <SectionHeader text="Past Week" />
        <HabitPastWeek getPastWeek={this.getPastWeek} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
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
