/* 
  BodyText sets up a general font family so that we can use BodyText instead of
  the built-in text
*/
import React from 'react';
import {Text, StyleSheet} from 'react-native'

function BodyText(props) {
  return (
    <Text style={{...styles.body, ...props.style}}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "Lobster"
  }
})

export default BodyText;