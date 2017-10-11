import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SectionHeader = ({ text }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    padding: 15
  },
  headerText: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default SectionHeader;
