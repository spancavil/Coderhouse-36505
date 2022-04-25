import { useState } from "react";
import {Text, View, StyleSheet, Modal, Touchable, TouchableOpacity, Button} from "react-native"
import { colors } from "../Styles/Global"

const Item = ({todo}) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <TouchableOpacity onPress={()=> setModalVisible(true)}>
      <View style={styles.todoContainer}>
        <Text style={styles.text}>
          {todo}
        </Text>
      </View>
    </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Button title="Cerrar modal" onPress={()=>setModalVisible(false)} />
        </View>
      </Modal>
    </>
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
  },
  modal: {
    backgroundColor: '#fff',
    width: 300,
    height: 400,
    marginTop: 100,
    marginLeft: 50
  }
})