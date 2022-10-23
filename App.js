import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MealsNavigation from './app/navigation/MealsNavigation';

// fetch local Fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "EduQLD-Regular": require('./app/assets/fonts/EduQLDBeginner-Regular.ttf'),
    "EduQLD-Bold": require('./app/assets/fonts/EduQLDBeginner-Bold.ttf')
  })
}

function App(props) {
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

  if (!appIsReady) return null

  return (
    <View
      style={styles.screen}
      onLayout={onLayoutRootView}>
      <MealsNavigation />
    </View>
  );
}


// 样式表
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
