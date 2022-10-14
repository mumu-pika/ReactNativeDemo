import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      {/* <Text style={styles.headerTitle}>{props.title}</Text> */}
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    backgroundColor: colors.headerColor,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: colors.headerTitle,
    fontSize: 26,
    fontFamily: 'Lobster'
  },
})

