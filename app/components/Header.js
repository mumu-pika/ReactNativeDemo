import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

function Header(props) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}>
      <Text style={styles.headerTitle}>{props.title}</Text>
      {/* <Text style={styles.headerTitle}>{props.title}</Text> */}
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  //
  headerBase: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:Platform.OS == "android" ? colors.headerColor: colors.orangeRed,
    // borderBottomColor: Platform.OS == "ios" ? "white" : "skyblue",
    // borderBottomWidth: Platform.OS == "ios" ? 5 : 10,
  },

  // 分平台处理header样式
  // 配合上Platform.select({}) 使用
  headerIOS: {
    backgroundColor: colors.orangeRed,
    borderBottomColor: "white",
    borderBottomWidth: 5
  },
  headerAndroid: {
    backgroundColor: colors.headerColor,
    borderBottomColor: "skyblue",
    borderBottomWidth: 10,
  },

  headerTitle: {
    color: colors.headerTitle,
    fontSize: 26,
    fontFamily: 'Lobster'
  },
})

