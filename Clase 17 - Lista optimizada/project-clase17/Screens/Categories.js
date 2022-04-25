import {Text, Button, View} from 'react-native'

const Categories = ({navigation}) => {
  return (
      <View>
          <Text>Categories</Text>
          <Button title='Go products' onPress={()=> navigation.navigate("Products")}/>
      </View>
  )
}

export default Categories