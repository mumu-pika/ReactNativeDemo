import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

function CategoryGridTile(props) {
  // 平台兼容, 可以避免安卓平台的shadow显示问题
  let TouchableCmp = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: props.color } }} >
          <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden' // 避免涟漪效应超出框的范围
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 10,
    elevation: 3, // 仅在android平台使用
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'EduQLD-Regular',
    fontSize: 26,
    textAlign: 'right'
  }
})

export default CategoryGridTile;