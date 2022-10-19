// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, TextInput, View, SafeAreaView, Image, TouchableOpacity, Button, Platform,
  StatusBar, Dimensions
} from 'react-native';
// useDimensions, 无论是否处于纵向模式我们能获取到屏幕正确的尺寸
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font'
/*
  AppLoading is a component which will basically prolong the default loading screen
  It will prolong the screen to stay active until a certain task
*/
// import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen';

import Header from './app/components/Header';
import StartGameScreen from './app/screens/StartGameScreen';
import GameScreen from './app/screens/GameScreen';
import GameOverScreen from './app/screens/GameOverScreen';

// fetch local fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "Kreon": require('./app/assets/fonts/Kreon-Regular.ttf'),
    "Lobster": require('./app/assets/fonts/Lobster-Regular.ttf'),
  })
}

/*
  The finished game will essentially have three different screens.
  One for configuring and starting the game,
  One when the game is running,
  One when the game is over
*/
export default function App() {
  // given a state to separate the different components
  const [userNumber, setUserNumber] = useState()

  // the number of rounds it took the computer to finish the game
  const [guessRounds, setGuessRounds] = useState(0)

  // appIsReady
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await fetchFonts()
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }


  // restart the game
  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
    // setDataLoaded(false)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  // 根据 guessRounds 判断 if game is running
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={newGameHandler} />
  }
  return (
    <View
    style={styles.screen}
    onLayout={onLayoutRootView}>
      <Header title="Guess a Number!" />
      {content}
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
