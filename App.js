// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, TextInput, View, SafeAreaView, Image, TouchableOpacity, Button, Platform,
  StatusBar, Dimensions
} from 'react-native';
// useDimensions, 无论是否处于纵向模式我们能获取到屏幕正确的尺寸
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { useState } from 'react';

import Header from './app/components/Header';
import StartGameScreen from './app/screens/StartGameScreen';

/* 
  The finished game will essentially have three different screens.
  One for configuring and starting the game,
  One when the game is running,
  One when the game is over
*/
export default function App() {

  return (
    <View style={styles.screen}>
      <StartGameScreen />
      
    </View>
  );
}


/*
  StyleSheet可以验证其中的css样式属性, 可以规避掉像拼写错误的问题
*/
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'skyblue',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  // },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  }
})
