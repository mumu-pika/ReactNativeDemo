import React, {useState} from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View, FlatList } from 'react-native';


function WelcomeScreen(props) {
  // 登录和注册的状态
  const [isLogin, setIsLogin] = useState(false)

  const loginHandler = () => {
    // 这里在setIslogin中传入一个箭头函数, 保证的是渲染完毕的islogin的值，而不是oldValue
    setIsLogin(isLogin => !isLogin)
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >

      <View style={styles.logoContainer}>
        {/* logo */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />

        {/* 登录页欢迎语标题 */}
        <Text style={styles.slogan}>漕溪王朝轰隆隆</Text>
      </View>

      {/* 底部按钮 */}
      <View style={styles.loginButton}>
        <Button title='login' onPress={loginHandler}></Button>
      </View>
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

export default WelcomeScreen;


/* 样式 */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#fc5c65",

  },

  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4"
  },

  logoContainer: {
    position: "absolute",
    alignItems:'center',
    top: 20
  },

  logo: {
    width: 100,
    height: 100,
  },

  slogan: {
    color: "#eee",
    fontSize: 24
  }
})