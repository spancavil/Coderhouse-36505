import { useContext, useEffect, useState } from 'react';
import {Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import { Shop } from '../Context/ShopProvider';
import { fetching } from '../Services/fetch';

const Products = ({navigation, route}) => {
  const {category} = route.params;

  const {products} = useContext(Shop);

  const [productFilter, setProductFilter] = useState([])

  useEffect(()=> {

    (async ()=>{
      const productFilter = products.filter(product => product.species === category)
      setProductFilter(productFilter);
    })()

  }, [category])

  const handleDetail = (item) => {
    navigation.navigate('Detail', {
      id: item.id,
      title: item.name,
      item: item,
    })
  }

  return (
    <View>
      <Text>Products</Text>
      {products.length !== 0 ? 
        <FlatList
          data={productFilter}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleDetail(item)}
            >
              <Text>
                {item.name}
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