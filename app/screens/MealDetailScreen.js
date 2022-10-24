// The ingredients and detailed steps for this meal
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

function MealDetailScreen(props) {
  const navigation = props.navigation
  const { popToTop } = navigation
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          popToTop() // go back to root screen
        }} />
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