import { FlatList, Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../Context/ShopProvider'
import CartItem from '../Components/CartItem'
import { colors } from '../Styles/colors'

const Cart = () => {

  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)

  const value = useContext(Shop);

  const fnRender = ({ item }) => {
    return (
      <CartItem
        item={item}
        handleRemove={value.removeItem}
      />
    )
  }

  useEffect(() => {
    setTotal(value.sumaTotal())
  }, [value.cart])

  return (
    <View>
      <Text>Cart</Text>
      <FlatList
        data={value.cart}
        keyExtractor={item => item.id}
        renderItem={fnRender}
      >
      </FlatList>
      <View>
        <Text>Total: {(total.toFixed(1))}</Text>
        <TouchableOpacity onPress={()=> setModalVisible(true)}>
          <Text>Purchase</Text>
        </TouchableOpacity>
      </View>
      {/* Este modal debería ser un componente aparte */}
      <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          setModalVisible(false)
        }}
      >
        <View style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <Text>Testing</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  modalParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    height: 500,
    width: 300,
    backgroundColor: colors.lightViolet,
  }
})