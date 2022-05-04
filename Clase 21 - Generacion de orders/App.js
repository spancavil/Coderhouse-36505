import { LogBox } from 'react-native';
import ShopProvider from './Context/ShopProvider';
import MainNavigator from './Navigation';

export default function App() {

  LogBox.ignoreLogs(["timer"])
  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
  );
}
