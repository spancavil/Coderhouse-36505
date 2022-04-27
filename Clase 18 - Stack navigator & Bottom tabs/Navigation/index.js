import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Categories from "../Screens/Categories";
import Detail from "../Screens/Detail";
import Products from "../Screens/Products";

const MainNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Categories"
        >
            <Stack.Screen 
                name = "Categories" 
                component={Categories} 
                options={{title: "Categories"}}
            />
            <Stack.Screen 
                name = "Products" 
                component={Products} 
                options={ ({route}) => ({title: route.params.category})}/>
            <Stack.Screen name = "Detail" component = {Detail} options={{title: "Detail"}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainNavigator