import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ScreenA from './Screens/ScreenA';
import ScreenB from './Screens/ScreenB';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen A'>
        <Stack.Screen
          name='Screen A'
          component={ScreenA}
          title="Screen A"
        ></Stack.Screen>
        <Stack.Screen
          name='Screen B'
          component={ScreenB}
          title="Screen B"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
