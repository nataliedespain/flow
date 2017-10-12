import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

const HabitsHeader = ({ toggleForm }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerFont}>
          Habits
        </Text>
      </View>
      <TouchableHighlight onPress={() => toggleForm()} underlayColor="white">
        <View style={styles.headerRight}>
          <Text style={[styles.headerFont, styles.headerRightFont]}>
            <Icon
              name="plus-circle"
              size={30}
              color={colors.blue}
            />
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    minHeight: 65,
    margin: 15,
    marginBottom: 0,
    paddingTop: 10,
    width: '90%',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: colors.lightgray,
  },
  headerFont: {
    fontSize: 30,
    fontWeight: '300',
  },
  headerRightFont: {
    textAlign: 'right',
    paddingTop: 4
  },
});

export default HabitsHeader;
