// The ingredients and detailed steps for this meal
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>FavoritesScreen</Text>
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

export default MealDetailScreen;