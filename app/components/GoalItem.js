import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


function GoalItem(props) {
    return (
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    );
  }

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    // marginVertical 在垂直方向也就是上下加上margin
    marginVertical: 10,
    backgroundColor: "#eee",
    borderColor: "skyblue",
    borderWidth: 1
  }
})