import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#3f2f25' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name='list' size={size} color={color} />
          }
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => {
            return <Ionicons name='star' size={size} color={color} />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'></StatusBar>
      {/* <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f5f5f5'
        }}>
          <Drawer.Screen
            name={"Welcome"}
            component={WelcomeScreen}
            options={{
              drawerLabel: 'Welcome Screen',
              drawerIcon: ({color, size}) => {
                return <Ionicons name='home' size={size} color={color} />
              }
            }}
          />
          <Drawer.Screen
            name={"User"}
            component={UserScreen}
            options={{
              drawerIcon: ({color, size}) => {
                return <Ionicons name='person' size={size} color={color} />
              }
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <BottomTab.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveBackgroundColor: '#f5f5f5'
        }}>
          <BottomTab.Screen
            name={"Welcome"}
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Ionicons name='home' size={size} color={color} />
              }
            }}
          />
          <BottomTab.Screen
            name={"User"}
            component={UserScreen}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Ionicons name='person' size={size} color={color} />
              }
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer> */}
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Drawer'
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' }
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name={'MealDetail'}
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
