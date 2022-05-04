import { ActivityIndicator, FlatList, Modal, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Shop } from '../Context/ShopProvider'
import CartItem from '../Components/CartItem'
import { colors } from '../Styles/colors'
import { addDoc, collection, doc, getDoc, writeBatch } from 'firebase/firestore'
import { db } from '../Firebase/config'

const Cart = () => {

  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [checkoutText, setCheckoutText] = useState("")
  const [loadingCheckout, setLoadingCheckout] = useState(false)

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

  const handlePurchase = () => {
    // console.log("Se realizo la compra");
    // console.log(nombre, direccion);
    if (nombre === "" || direccion === "") {
      return
    }
    const orderGenerada = {
      buyer: {
        nombre: nombre,
        direccion: direccion
      },
      items: value.cart
      ,
      total: total,
      createdAt: new Date().toLocaleString()
    }

    //Primer paso: abrir un batch
    const batch = writeBatch(db)//ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    value.cart.forEach((prod) => {
      setLoadingCheckout(true)
      getDoc(doc(db, 'productos', prod.id))
        .then((documentSnapshot) => {
          if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, 'productos', documentSnapshot.id), {
              stock: documentSnapshot.data().stock - prod.quantity
            })
          } else {
            outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
          }
          console.log(outOfStock);

          if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), orderGenerada).then(({ id }) => {
              batch.commit().then(() => {
                setCheckoutText(`Se genero la order con id:  + ${id}`)
              })
            }).catch((err) => {
              console.log(`Error: ${err.message}`);
              setCheckoutText(`Error: ${err.message}`)
            })
          } else {
            let mensaje = ''
            for (const producto of outOfStock) {
              mensaje += `${producto.name} `
            }
            setCheckoutText(`Productos fuera de stock: ${mensaje}`)
          }

          setLoadingCheckout(false)
        })
    })
  }

  return (
    <View>
      {value.cart.length !== 0 ?
        <>
          <Text>Cart</Text>
          <FlatList
            data={value.cart}
            keyExtractor={item => item.id}
            renderItem={fnRender}
          >
          </FlatList>
          <View>
            <Text>Total: {(total.toFixed(1))}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text>Purchase</Text>
            </TouchableOpacity>
          </View>
        </>
        :
        <Text>No hay productos en el cart</Text>
      }
      {/* Este modal debería ser un componente aparte */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.modalParent}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>X</Text>
            </TouchableOpacity>
            <TextInput 
              placeholder='Ingresar nombre'
              onChangeText={setNombre}
              value={nombre}
            />
            <TextInput 
              placeholder='Ingresar direccion'
              onChangeText={setDireccion}
              value={direccion}
            />
            <Text>¿Quieres confirmar la compra?</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePurchase}>
              <Text>Confirmar</Text>
            </TouchableOpacity>
            {loadingCheckout && <ActivityIndicator size={'small'} color={"green"}/>}
            {!loadingCheckout && <Text>{checkoutText}</Text>}
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