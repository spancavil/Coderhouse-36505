import 'isomorphic-fetch';
import { fetching } from '../Services/fetch';

test('real fetch call', async () => {
  const data = await fetching('https://jsonplaceholder.typicode.com/users/1');
  expect(data.name).toBe('Leanne Graham');  // Success!
});