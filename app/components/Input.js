import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native'

function Input(props) {
  return (
    // 这里{...props} 获取到对应传入的参数设置, 比如blurOnSubit
    <TextInput {...props} style={{...styles.input, ...props.style}}>
    </TextInput>
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})