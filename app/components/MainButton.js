import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function MainButton(props) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {

  },
  buttonText: {

  }
})

export default MainButton;