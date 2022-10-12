import React from 'react';
import {View, StyleSheet} from 'react-native';


function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // shadow 属性只能在ios平台上使用
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.2,
    // elevation 属性只能在andriod平台上使用
    elevation: 10,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10
  }
})