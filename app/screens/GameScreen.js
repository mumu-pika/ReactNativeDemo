import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


// 生成一个指定范围内[min, max]的随机整数
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  // create a random number between min and max
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) return generateRandomBetween(min, max, exclude)
  else return randomNum
}

function GameScreen(props) {
  const {userChoice, onGameOver} = props
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
  const [rounds, setRounds] = useState(0)
  // useRef allows us to define a value which survives component re-renders
  // Initial boundaries 随机数的初始边界
  const currentLow = useRef(1)
  const currentHigh = useRef(100)

  useEffect(() => {
    // the function is executed after every render cycle
    if (currentGuess === userChoice) {
      // send a game finish message and send that to App.js
      // so that we can swap the game screen for a game over
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  // 猜数字高低
  const nextGuessHandler = direction => {
    // 如果用户的选择有误
    if ((direction === 'lower' && currentGuess > userChoice)
      || (direction === 'greater' && currentGuess < userChoice)
    ) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
        { text: 'Sorry！', style: 'cancel ' }
      ])
      return
    }

    // 继续猜测
    // 重新划定范围
    if (direction === 'lower') {
      currentLow.current = currentGuess
    }
    else {
      currentHigh.current = currentGuess
    }
    // 根据新划定的范围, 猜测得出下一个数字
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
  }


  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
})

export default GameScreen;