import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Volume from './Volume';
import Distance from './Distance';
import Surface from './Surface';


const Tab = createMaterialTopTabNavigator();

const MainScreen = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Distance') {
              iconName = "ios-infinite";
            } else if (route.name === 'Surface') {
              iconName = "ios-move";
            }
            else if (route.name === 'Volume') {
              iconName = "ios-beaker";
            }
            return <Ionicons name={iconName} size={26} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
          showIcon: true,
        }}
      >
                <Tab.Screen name="Distance" component={Distance} />
                <Tab.Screen name="Surface" component={Surface} />
                <Tab.Screen name="Volume" component={Volume} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;