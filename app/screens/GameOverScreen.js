import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native'


function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is over!</Text>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/cake.jpg')}
          // use web images like below
          fadeDuration={200}
          source={{uri:'https://images.unsplash.com/photo-1515822565665-f1462222eb4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.bodyText}>Number of Rounds: {props.rounds}</Text>
      <Text style={styles.bodyText}>Your Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: 'Kreon'
  },
  bodyText: {
    fontSize: 20,
    fontFamily: 'Kreon',
    marginVertical: 4
  },
  imageContainer: {
    width: '80%',
    height: 300,
    borderWidth: 2,
    borderColor: 'hotpink',
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    /*
      for images which are fetching with a link,
      we always have to set a width and a height on the image.
      Actually this fade-in effects is used for all images.
    */
    width: '100%',
    height: '100%',
  }
})

export default GameOverScreen;