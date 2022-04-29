import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/config";
import Auth from "../Screens/Auth";
import TabNavigator from "./Tabs";

const MainNavigator = () => {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                setUser(null)
                // User is signed out
                // ...
            }
        });
    }, [])

    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            {user ?
                <TabNavigator></TabNavigator>
                :
                <Auth />
            }
        </NavigationContainer>
    )
}

export default MainNavigator