import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import colors from '../config/colors';
import Input from '../components/Input';

function StartGameScreen(props) {
  // State
  const [enteredValue, setEnteredValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [number, setNumber] = useState() // the number to start the game

  // 输入内容
  const numberInputHandler = input => {
    // 校验输入的内容, 将不是数字的部分去除
    setEnteredValue(input.replace(/[^0-9]/g, ''))
  }

  // reset 按钮
  const resetInputHandler = () => {
    setEnteredValue("")
    setConfirmed(false)
  }

  // confirm 按钮
  const confirmInputHandler = () => {
    // output a messageBox to give user one final chance of changing his choice

    const chosenNumber = parseInt(enteredValue)
    if (chosenNumber == NaN
      || chosenNumber <= 0
      || chosenNumber > 99)
      return

    /*
      setEnteredValue will only be done in the next render cycle
      and not immediately after this line is executed, and setEnteredValue
      here will basically be queued by React and will only be processed
      the next time when the component is rendered and here these three state
      changes are all batched together to result in one render cycle,
      so we can still safely execute or access the 'enteredValue'.
    */
    setConfirmed(true)
    setEnteredValue("")
    setNumber(chosenNumber)
  }

  // message to show
  let confirmedOutput
  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {number}</Text>
  }

  return (
    // when a press happens, we want to dismiss the keyboard
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Header title="Guess a Number!" />
        <Text style={styles.title}>Start a New Game!</Text>
        {/* <StartGameScreen></StartGameScreen> */}
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={colors.primary} onPress={resetInputHandler} />
            </View>
            <View>
              <Button title="Confirm" color={colors.secondary} onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 60,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  button: {
    width: 60
  }
})