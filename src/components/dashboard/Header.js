import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.headerFont}>
          Hello,
          <Text style={styles.headerFontThin}> Natalie</Text>
        </Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={[styles.headerFont, styles.headerRightFont]}>
          <Moment element={Text} format="D MMM">{moment()}</Moment>
        </Text>
      </View>
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
    fontWeight: '700',
  },
  headerRightFont: {
    textAlign: 'right',
    color: colors.gray
  },
  headerFontThin: {
    fontWeight: '300'
  }
});

export default Header;
