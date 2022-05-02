import ShopProvider from './Context/ShopProvider';
import MainNavigator from './Navigation';

export default function App() {
  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
  );
}
