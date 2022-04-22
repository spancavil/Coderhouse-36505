import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clase 14 - Introducción a React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  }
});
