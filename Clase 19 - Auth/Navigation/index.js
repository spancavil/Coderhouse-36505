import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState } from "react";
import Auth from "./Stacks/Auth";
import TabNavigator from "./Tabs";

const MainNavigator = () => {

    const Stack = createNativeStackNavigator();

    const [user, setUser] = useState(null);

    return (
        <NavigationContainer>
            {user ?
            <TabNavigator></TabNavigator>
            :
            <Auth/>
            }
        </NavigationContainer>
    )
}

export default MainNavigator