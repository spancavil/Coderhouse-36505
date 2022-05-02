import { signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { Text, Button, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Shop } from '../Context/ShopProvider';
import { auth } from '../Firebase/config';
import { fetching } from '../Services/fetch';

const Categories = ({ navigation }) => {

  const {categories} = useContext(Shop);

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
          
          data={categories}
          renderItem={( {item} ) => {
            return <TouchableOpacity
              onPress={() => handleCategory(item.category)}
            >
              <Text>
                {item.category}
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