import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'


function GoalItem(props) {
  /* 
   onTouchEnd
   帮助我们监听在用户完成触摸之后的事件
   但是onTouchEnd并没有告知我们这个事件是长按还是短按,
   当用户开始使用onTouchStart 触摸它的时候设置一个计时器等待onTouchEnd事件触发,
   然后manually decide if that was long enough or not.

   基于上面的思考, 我们可能不得不去编写大量代码去自行确定用户是哪种触摸方式
   好消息是, React Native里面内置了Touchable组件。
   Touchable组件是可以包裹在 any view or any text or whatever you have.

   Touchable is not visible, and it doesn't render anything you can see
   on the screen but it will wrap this and register the touch event on the
   child you wrap touchable around.
   Touchable can gives you finished touch event, so more detailed touch events
   which were pre configured for you.
   
   Now to be exact, Touchable like this can't be used as a component, it acts more as
   a parent class for React Native because there are multiple specific versions of 
   touchable which you then actually should use.
  */
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    // marginVertical 在垂直方向也就是上下加上margin
    marginVertical: 10,
    backgroundColor: "#eee",
    borderColor: "skyblue",
    borderWidth: 1
  }
})