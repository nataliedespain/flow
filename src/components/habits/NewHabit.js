import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RadioButton from 'radio-button-react-native';
import colors from '../../styles/colors';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as toggle from '../../actions/toggleNewHabit';
import * as habitsActions from '../../actions/habits';

import SectionHeader from '../common/SectionHeader';

const NewHabit = (props) => {
  const data = [
    { key: 0, section: true, label: 'Time of Day' },
    { key: 1, label: 'Morning' },
    { key: 2, label: 'Afternoon' },
    { key: 3, label: 'Night' },
  ];
  return (
    <View style={styles.newFormContainer}>
      {console.log(props)}
      <SectionHeader text="Add a Habit" noMargin />
      <TextInput
        style={styles.newInput}
        placeholder="Habit"
        value={props.habits.name}
        onChangeText={props.habitsActions.nameInput}
      />
      <RadioButton
        currentValue={props.habits.time}
        value={1}
        onPress={e => props.habitsActions.timeInput(e)}
      >
        <Text>Morning</Text>
      </RadioButton>
      <RadioButton
        currentValue={props.habits.time}
        value={2}
        onPress={e => props.habitsActions.timeInput(e)}
      >
        <Text>Afternoon</Text>
      </RadioButton>
      <RadioButton
        currentValue={props.habits.time}
        value={3}
        onPress={e => props.habitsActions.timeInput(e)}
      >
        <Text>Night</Text>
      </RadioButton>
      <TouchableOpacity
        onPress={() => {
          props.habitsActions.newHabit({
            name: props.habits.name,
            time: props.habits.time,
            user_id: 'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
          });
          props.toggle.toggleNewHabit();
        }}
      >
        <View style={styles.newButton}>
          <Text style={styles.newButtonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
)(NewHabit);
