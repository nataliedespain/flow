import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HabitHeader = ({ name, toggleForm, formToggled }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerFont}>
          {name}
        </Text>
      </View>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => toggleForm()}
      >
        <View style={styles.headerRight}>
          <Text style={[styles.headerFont, styles.headerRightFont]}>
            {formToggled ?
              <Icon
                name="more-vert"
                size={40}
                color={colors.gray}
              /> :
              <Icon
                name="more-horiz"
                size={40}
                color={colors.gray}
              />
            }
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    maxHeight: 65,
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

export default HabitHeader;
