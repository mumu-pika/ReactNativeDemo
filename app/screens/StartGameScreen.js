import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
  Button, TouchableWithoutFeedback, Keyboard, Alert,
  Dimensions, ScrollView, KeyboardAvoidingView
} from 'react-native'
import { useState, useEffect } from 'react';

import Card from '../components/Card';
import colors from '../config/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton.android';

function StartGameScreen(props) {
  // State
  const [enteredValue, setEnteredValue] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [number, setNumber] = useState() // the number to start the game
  const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4) // 对于屏幕横屏和竖屏, 按钮的宽度处理

  useEffect(() => {
    // 当屏幕翻转时候, 会引发屏幕尺寸的变化, 这个时候重新再设置一下合适尺寸
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4)
    }
    // 监听尺寸发生变化的事件回调
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  }, [])

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
    // 如果输入的内容不符合要求
    if (isNaN(chosenNumber)
      || chosenNumber <= 0
      || chosenNumber > 99) {
      Alert.alert("Invaild Input", "Number has to be a number between 1 and 99",
        [{ text: 'Okay', style: "destructive", onPress: resetInputHandler }]
      )
      return
    }

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
    Keyboard.dismiss()
  }

  // message to show (开始游戏的消息卡片)
  let confirmedOutput
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Chosen Number</Text>
        <NumberContainer>{number}</NumberContainer>
        <MainButton style={{ backgroundColor: colors.orangeRed }} onPress={() => props.onStartGame(number)}>
          Start Game!
        </MainButton>
      </Card>
    )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        {/* when a press happens, we want to dismiss the keyboard */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
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
                <View style={{width: buttonWidth}}>
                  <Button title="Reset" color={colors.primary} onPress={resetInputHandler} />
                </View>
                <View style={{width: buttonWidth}}>
                  <Button title="Confirm" color={colors.secondary} onPress={confirmInputHandler} />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: "Kreon",
    marginVertical: 10
  },
  inputContainer: {
    width: "80%",
    /* set up flexible rules */
    maxWidth: "90%",
    minWidth: 300,
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
  // button: {
  //   // width: "40%"
  //   // this code down here is simply only runs once in our app lifecycle
  //   width: Dimensions.get("window").width / 4
  // },

  // 输入数字提示并展示的区域
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
})

export default StartGameScreen;