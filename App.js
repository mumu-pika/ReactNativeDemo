import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function App(props) {
  return (
    <View style={styles.screen}>
      <Text>hhhh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
