import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../config/colors';

function MainButton(props) {
  // point at the touchable opacity object here
  let ButtonComponent = TouchableOpacity

  // ripple effect 只在 Android Api >= 21 版本上支持
  if (Platform.OS === 'android' && Platform.Version > 21) {
    ButtonComponent = TouchableNativeFeedback
  }

  // the skeleton for our button
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={styles.buttonText}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontFamily: 'Kreon'
  }
})

export default MainButton;