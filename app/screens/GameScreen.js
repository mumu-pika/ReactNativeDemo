import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, Button,
  Alert, ScrollView, Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

// it can be used for locking and unlocking the orientation at runtime
import * as ScreenOrientation from 'expo-screen-orientation';


// 生成一个指定范围内[min, max]的随机整数
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  // create a random number between min and max
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) return generateRandomBetween(min, max, exclude)
  else return randomNum
}

// display the process of guess numbers
const renderItems = (value, rounds) => (
  <View key={value} style={styles.listItem}>
    <Text style={styles.listText}>#{rounds}</Text>
    <Text style={styles.listText}>{value}</Text>
  </View>
)

function GameScreen(props) {
  // 设置为方向锁定
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  ScreenOrientation.getOrientationLockAsync(ScreenOrientation.OrientationLock.PORTRAIT)



  // 每次渲染, initalGuess都会被重新创建, 但它实际上不会被使用, 因为useState初始化就执行一次
  const initialGuess = generateRandomBetween(1, 100, props.userChoice)
  const { userChoice, onGameOver } = props
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [rounds, setRounds] = useState(0) // 游戏回合数
  const [guessList, setGuessList] = useState([initialGuess]) // 记录每次猜测的结果
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  )
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height
  )

  // change the layout when the device screen rotation
  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width)
      setAvailableDeviceHeight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener('change', updateLayout)
    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

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
    if ((direction === 'lower' && currentGuess < userChoice)
      || (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
        { text: 'Sorry！', style: 'cancel ' }
      ])
      return
    }

    // 继续猜测
    // 重新划定范围
    if (direction === 'greater') {
      currentLow.current = currentGuess + 1
    }
    else {
      currentHigh.current = currentGuess
    }
    // 根据新划定的范围, 猜测得出下一个数字
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    // update guess
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
    setGuessList(curGuessList => [nextNumber.toString(), ...curGuessList])
  }


  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={26} color="white"></Ionicons>
        </MainButton>
        <MainButton title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')}>
          <Ionicons name="md-add" size={26} color="white"></Ionicons>
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* contentContainerStyle help to control the layout inside of that scroll view */}
        <ScrollView contentContainerStyle={styles.listContent}>
          {guessList.map((guess, index) => renderItems(guess, guessList.length - index))}
        </ScrollView>
      </View>
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
    marginTop: Dimensions.get("window").height > 600 ? 20 : 30,
    width: 300,
    maxWidth: "80%"
  },
  listContainer: {
    width: 300,
    maxWidth: "80%",
    flex: 1, // important, 不然其包裹的ScrollView在安卓平台上不会生效
  },
  listContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  listItem: {
    borderColor: "#00acc1",
    borderWidth: 2,
    padding: 5,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%"
  },
  listText: {
    fontSize: 20
  }
})

export default GameScreen;