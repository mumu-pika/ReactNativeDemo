// food Categories component
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function CategoriesScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
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

export default CategoriesScreen;