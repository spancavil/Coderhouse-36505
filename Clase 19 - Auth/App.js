import { auth } from './Firebase/config';
import MainNavigator from './Navigation';

console.log(auth);

export default function App() {
  return (
    <MainNavigator/>
  );
}
