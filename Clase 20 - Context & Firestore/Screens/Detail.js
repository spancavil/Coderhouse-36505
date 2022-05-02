import {View, Text, Image} from 'react-native';

const Detail = ({navigation, route}) => {

  const {item} = route.params;

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
      </View>
  )
}

export default Detail