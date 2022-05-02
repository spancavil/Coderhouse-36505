import {View, Text} from 'react-native';

const Detail = ({navigation, route}) => {

  const {item} = route.params;

  return (
      <View>
          <Text>{item.description}</Text>
      </View>
  )
}

export default Detail