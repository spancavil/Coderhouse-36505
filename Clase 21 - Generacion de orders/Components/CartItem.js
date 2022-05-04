import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CartItem = ({item, handleRemove}) => {
  return (
    <View>
      <Text>{item.name}, qty: {item.quantity}, total: ${item.price * item.quantity}</Text>
      <TouchableOpacity onPress={()=> handleRemove(item.id)}>
          <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})