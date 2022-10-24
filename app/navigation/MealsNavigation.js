import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 引入需要导航的页面
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import ModalScreen from '../screens/ModalScreen';

import Colors from '../config/Colors'

// 做相应的映射处理
const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

/* 
  Group allows us to set up options that apply to every screen
  对于多个screen复用同一的options, 可以使用Stack.Group将这些screen分为一组,然后设置统一的options
  如果screen有个别其他options需求, 再额外添加, 会覆盖统一的options
*/

function MealsNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{
          headerStyle: {
            backgroundColor: Colors.secondary
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.primary
          },
        }}>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "My Meals Categories",
            }}
          />
          <Stack.Screen
            name="CategoryMeals"
            component={CategoryMealsScreen}
            options={{
              title: "Meal"
            }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name = "MyModal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigation;