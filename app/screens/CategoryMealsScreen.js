// the meals for a chosen category
import { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

// 引入分类的数据
import { CATEGORIES } from '../data/dummy-data';

function CategoryMealsScreen(props) {
  const { route, navigation } = props
  const { navigate, goBack } = navigation
  // get the params
  const { categoryId } = route.params

  // 根据id获取到这个分类的数据
  const selectedCategory = CATEGORIES.find(item => item.id === categoryId)

  // setOptions 动态修改路由参数
  useEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title
    })
  }, [selectedCategory.title])

  return (
    <View style={styles.screen}>
      <Text>itemId: {categoryId}</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='go to Details'
        onPress={() => {
          /* 
             navigate takes an object as an argument,
             in this object, we can set up the route name
             which we want to navigate
           */
          navigate('MealDetail')
        }} />

      <Button title='go to modal' onPress={() => {
        navigate('MyModal')
      }} />
      <Button title='go back' onPress={() => {
        goBack() //
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

export default CategoryMealsScreen;