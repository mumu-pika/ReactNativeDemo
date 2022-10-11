/* 
  这里来实现React Native的一些基本功能
*/

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, Modal } from 'react-native';


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

  // 移除列表中的展示内容
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  // Modal组件可以用来覆盖包含React Native根视图的原生视图（如UIViewController，Activity），用它可以实现遮罩的效果
  return (
    <Modal visible={props.visible} animationType="slide">
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
          renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
        />
      </View>
    </Modal>
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