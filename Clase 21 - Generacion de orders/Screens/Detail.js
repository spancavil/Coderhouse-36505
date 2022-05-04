import { useContext } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { Shop } from '../Context/ShopProvider';

const Detail = ({navigation, route}) => {

  const {item} = route.params;

  const {addCart} = useContext(Shop);

  const handleAdd = () => {
    addCart(item, 1)
  }

  return (
      <View>
          <Text>{item.name}</Text>
          <Image 
            source={{uri: item.image}}
            style = {{
              height: 200,
              width: '95%',
            }}
            resizeMode = "cover"
          />
          <Text>{item.price}</Text>
          <TouchableOpacity onPress={handleAdd}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
      </View>
  )
}

export default Detail