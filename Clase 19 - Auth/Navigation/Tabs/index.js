import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from '../Stacks/Shop';
import CartStack from '../Stacks/Cart';
import OrderStack from '../Stacks/Orders';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
                <Tab.Screen name="Shop" component={ShopStack} />
                <Tab.Screen name="Cart" component={CartStack} />
                <Tab.Screen name="Orders" component={OrderStack}/>
            </Tab.Navigator>
    );
}

export default TabNavigator