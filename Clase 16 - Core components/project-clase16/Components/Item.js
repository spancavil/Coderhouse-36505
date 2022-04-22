import {Text, View, StyleSheet} from "react-native"
import { colors } from "../Styles/Global"

const Item = ({todo}) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.text}>
        {todo}
      </Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: colors.darkBlue,
    padding: 10,
    margin: 10,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
  }
})