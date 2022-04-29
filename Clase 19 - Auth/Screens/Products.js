import { useEffect, useState } from 'react';
import {Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import { fetching } from '../Services/fetch';

const Products = ({navigation, route}) => {
  const {category} = route.params;

  const [products, setProducts] = useState([])

  useEffect(()=> {

    (async ()=>{
      const data = await fetching('https://fakestoreapi.com/products/category/' + category)
      setProducts(data);
    })()

  }, [category])

  const handleDetail = (item) => {
    navigation.navigate('Detail', {
      id: item.id,
      title: item.title,
      item: item,
    })
  }

  return (
    <View>
      <Text>Products</Text>
      {products.length !== 0 ? 
        <FlatList
          data={products}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleDetail(item)}
            >
              <Text>
                {item.title}
              </Text>
            </TouchableOpacity>
          }
          }
          keyExtractor={item => item.id.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
    </View>
  )
}

export default Products