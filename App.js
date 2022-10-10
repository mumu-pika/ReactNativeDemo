// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Text, View, SafeAreaView, Image, TouchableOpacity, Button, Platform,
  StatusBar, Dimensions} from 'react-native';
// useDimensions, 无论是否处于纵向模式我们能获取到屏幕正确的尺寸
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import GoalInput from './app/components/GoalInput';


export default function App() {
  // 在IOS中window和screen一致, 在Android中有差异window尺寸小一点
  // 会获取到fontScale, height, scale, width这几个数据
  // console.log(Dimensions.get("window"))
  // Debugger Test
  // let x = 1
  // x.toString()


  // 打印输出尺寸
  // console.log(useDimensions())
  // {"screen": {"fontScale": 1, "height": 731.4285714285714, "scale": 3.5, "width": 411.42857142857144}, "window": {"fontScale": 1, "height": 715.4285714285714, "scale": 3.5, "width": 411.42857142857144}}
  // console.log(useDeviceOrientation()) //{"landscape": false, "portrait": true}

  const {landscape} = useDeviceOrientation()

  return (
    <GoalInput/>
    /*
      SafeAreaView保留出顶部的刘海区域
    */
   /* style如果有多个, 可以以一个数组的形式传入, 同一个属性, 后者会覆盖前者 */
    // <SafeAreaView style={[containerStyle, styles.container]}>
    //   {/* <StatusBar style="auto" /> */}
    //   <Text>漕溪王朝</Text>
    //   {/* require会return a number to that is a reference to the image */}
    //   {/* <Image source={require('./assets/icon.png')} /> */}

    //   {/* onPress类似于onClick */}
    //   {/* TouchableNativeFeedback是只适用于Android平台的原生api, 其包裹View组件会有显示的效果 */}
    //   {/* <TouchableOpacity onPress={() => console.log("Image tapped")}>
    //     <Image
    //       // blurRadius={1}
    //       fadeDuration={2000}
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300"
    //       }} />
    //   </TouchableOpacity> */}
    //   <View
    //     style={{
    //       backgroundColor:"hotpink",
    //       width: "100%",
    //       height: landscape ? "100%" : "30%"
    //     }}
    //   ></View>

    //   <Button color="orange" title="666" onPress={() => alert("Button tapped")} />
    // </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "yellow" }

/*
  StyleSheet可以验证其中的css样式属性, 可以规避掉像拼写错误的问题
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})
