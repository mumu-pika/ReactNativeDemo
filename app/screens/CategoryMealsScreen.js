// the meals for a chosen category
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function CategoryMealsScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
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

export default CategoryMealsScreen;