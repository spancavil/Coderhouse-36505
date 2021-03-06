import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Text, Button, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { auth } from '../Firebase/config';
import { fetching } from '../Services/fetch';

const Categories = ({ navigation }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    (async () => {
      const data = await fetching('https://fakestoreapi.com/products/categories');
      setCategories(data);
    })()

  }, [])

  const handleCategory = (categoryID) => {
    //console.log(categoryID);
    navigation.navigate('Products', {
      category: categoryID
    })
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>
          Sign out
        </Text>
      </TouchableOpacity>
      <Text>Categories</Text>
      {categories.length !== 0 ? 
        <FlatList
          numColumns={2}
          
          data={categories}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleCategory(item)}
            >
              <Text>
                {item}
              </Text>
            </TouchableOpacity>
          }
          }
          keyExtractor={item => item.toString()}
        />
        :
        <ActivityIndicator size={"large"} color={"blue"}/>
      }
    </View>
  )
}

export default Categories