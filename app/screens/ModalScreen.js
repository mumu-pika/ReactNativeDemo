import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function ModalScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.modalText}>ModalScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  modalText: {
    fontSize: 40
  }
})

export default ModalScreen;