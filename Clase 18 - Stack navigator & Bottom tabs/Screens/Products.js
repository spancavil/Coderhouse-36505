import {Text, View, Button} from 'react-native';

const Products = ({navigation, route}) => {
  const {category} = route.params;
  console.log(category);
  return (
    <View>
      <Text>Products</Text>
      <Button title="Go to detail" onPress={()=> navigation.navigate("Detail")}/>
    </View>
  )
}

export default Products