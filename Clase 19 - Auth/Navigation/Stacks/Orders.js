import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../../Screens/Orders';

const OrderStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: "Orders"
                }}
            />
        </Stack.Navigator>
    )
}

export default OrderStack