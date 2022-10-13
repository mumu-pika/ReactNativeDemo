import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import colors from '../config/colors';

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  number: {
    color: colors.secondary,
    fontSize: 22
  }
})

export default NumberContainer;