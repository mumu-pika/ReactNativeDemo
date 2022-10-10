/* 
  这里来实现React Native的一些基本功能
*/

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';


import GoalItem from './GoalItem';

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  // 获取并设置输入框内的内容
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  // 列表展示出输入的内容
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/*
        FlatList有3个重要的属性：
          keyExtractor 指定捕获每个数据item的唯一的键值
          data 指向输入数据的数据属性
          renderItem 接收一个为每个项调用的函数
      */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  }

})