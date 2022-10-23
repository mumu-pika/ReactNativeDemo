import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 引入需要导航的页面
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

// 做相应的映射处理
const Stack = createNativeStackNavigator({
  // Categories: CategoriesScreen,
  // CategoryMeals: {
  //   screen: CategoryMealsScreen
  // }
});

function MealsNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        {/* <Stack.Screen name="CategoryMeals" /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigation;