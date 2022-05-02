import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../../Screens/Cart';

const CartStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Carrito"
                component={Cart}
                options={{
                    title: "Cart"
                }}
            />
        </Stack.Navigator>
    )
}

export default CartStack