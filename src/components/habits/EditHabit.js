import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RadioButton from 'radio-button-react-native';
import colors from '../../styles/colors';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as toggle from '../../actions/toggle';
import * as habitsActions from '../../actions/habits';

import SectionHeader from '../common/SectionHeader';

class EditHabit extends React.Component {
  componentDidMount() {
    this.props.habitsActions.editNameInput(this.props.habit.name);
    this.props.habitsActions.editTimeInput(this.props.habit.time);
  }
  render() {
    return (
      <View style={styles.newFormContainer}>
        <SectionHeader text="Edit Habit" noMargin />
        <TextInput
          style={styles.newInput}
          placeholder="Habit"
          value={this.props.habits.editName}
          onChangeText={this.props.habitsActions.editNameInput}
        />
        <View style={[styles.radioContainer, { marginTop: 15 }]}>
          <RadioButton
            currentValue={this.props.habits.editTime}
            value={1}
            onPress={e => this.props.habitsActions.editTimeInput(e)}
            outerCircleColor={colors.gray}
            innerCircleColor={colors.blue}
            innerCircleSize={20}
          >
            <Text style={styles.radioText}>Morning</Text>
          </RadioButton>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
            currentValue={this.props.habits.editTime}
            value={2}
            onPress={e => this.props.habitsActions.editTimeInput(e)}
            outerCircleColor={colors.gray}
            innerCircleColor={colors.blue}
            innerCircleSize={20}
          >
            <Text style={styles.radioText}>Afternoon</Text>
          </RadioButton>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
            currentValue={this.props.habits.editTime}
            value={3}
            onPress={e => this.props.habitsActions.editTimeInput(e)}
            outerCircleColor={colors.gray}
            innerCircleColor={colors.blue}
            innerCircleSize={20}
          >
            <Text style={styles.radioText}>Night</Text>
          </RadioButton>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.habitsActions.editHabit(this.props.habit.id, {
              name: this.props.habits.editName,
              time: this.props.habits.editTime
            });
            this.props.toggle.toggleEditHabit();
          }}
        >
          <View style={styles.newButton}>
            <Text style={styles.newButtonText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  newFormContainer: {
    width: '100%',
    padding: '8%',
    paddingTop: 15,
    paddingBottom: 15
  },
  newInput: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 8,
    marginBottom: 10
  },
  selectStyle: {
    borderRadius: 0,
    borderColor: colors.gray,
    marginBottom: 10
  },
  radioText: {
    marginLeft: 15,
    fontWeight: '400'
  },
  radioContainer: {
    marginBottom: 10
  },
  newButton: {
    backgroundColor: colors.blue,
    width: 150,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 50
  },
  newButtonText: {
    backgroundColor: 'transparent',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700'
  }
});

const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    habitsActions: bindActionCreators(habitsActions, dispatch),
    toggle: bindActionCreators(toggle, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHabit);
