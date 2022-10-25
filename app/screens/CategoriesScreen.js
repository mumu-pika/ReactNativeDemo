// food Categories component
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'

// 引入分类数据
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen(props) {
  const navigation = props.navigation
  const { navigate } = navigation

  // 渲染网格数据（菜单）
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigate('CategoryMeals', {
            // 这里是params部分, route会自动包上params：{}
            categoryId: itemData.item.id
          })
        }}
      />
    )
  }
  /* 下面是prop对象
    {
      "navigation": {
        "addListener": [Function addListener],
        "canGoBack": [Function canGoBack],
        "dispatch": [Function dispatch],
        "getId": [Function getId],
        "getParent": [Function getParent],
        "getState": [Function anonymous],
        "goBack": [Function anonymous],
        "isFocused": [Function isFocused],
        "navigate": [Function anonymous],
        "pop": [Function anonymous],
        "popToTop": [Function anonymous],
        "push": [Function anonymous],
        "removeListener": [Function removeListener],
        "replace": [Function anonymous],
        "reset": [Function anonymous],
        "setOptions": [Function setOptions],
        "setParams": [Function anonymous]},
        "route": {"key": "Categories-IEcS_d9rNPnwzNkkWyl_G",
        "name": "Categories",
        "params": undefined
      }
    }
  */
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text>CategoriesScreen</Text>
    //   <Button
    //     title='go to Meals'
    //     onPress={() => {
    //       /*
    //          navigate takes an object as an argument,
    //          in this object, we can set up the route name
    //          which we want to navigate
    //        */
    //       navigate('CategoryMeals')
    //    }} />
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen;