import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Categories from "../../Screens/Categories";
import Detail from "../../Screens/Detail";
import Products from "../../Screens/Products";

const ShopStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Categories"
        >
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{ title: "Categories" }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ route }) => ({ title: route.params.category })} />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={({ route }) => ({ title: route.params.title })} />
        </Stack.Navigator>
    )
}

export default ShopStack;