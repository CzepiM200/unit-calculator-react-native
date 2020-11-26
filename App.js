import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Volume from './screens/Volume';
import MainScreen from './screens/MainScreen';

export default function App() {
  console.log("LOGiiiiiiiiiii");
  return (
    <SafeAreaProvider style={{ paddingTop: 28}}>
      <MainScreen />
    </SafeAreaProvider> 
    
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
