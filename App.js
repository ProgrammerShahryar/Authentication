import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Header from './src/components/AuthHeader/AHeader';
import styles from './src/styles/main';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Authentication/Login'; 
import Signup from './src/components/Authentication/Signup';
import Logout from './src/components/Authentication/Logout';
import DataList from './src/components/List/List';

const Stack =
 createStackNavigator();
const Tab =
 createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login} />


        <Stack.Screen name="Signup" component={Signup} />


        <Stack.Screen name="Home"

        options={{
          headerShown: true,
          headerLeft: () => null,
        }}>
          {() => (
            <View style={styles.default}>

              <StatusBar style="auto" />

              <Header />

              <TabNavigator
              />
            </View>
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );

  function TabNavigator({}) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconCool;
            if (route.name === 'Logout') {
              iconCool = 'ios-log-out';
            }
            else if (route.name === 'List') {
              iconCool = 'ios-list';
            }
            return <Ionicons name={iconCool} size={34} color={color} />;
          },
        })}
      >
        <Tab.Screen name="List" component={DataList} />
        <Tab.Screen name="Logout">
          {(props) => <Logout />}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}
