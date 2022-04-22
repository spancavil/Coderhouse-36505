import { useState } from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';
import Item from '../Components/Item';
import globalStyle from '../Styles/Global';
import { colors } from '../Styles/Global';

const Layout = () => {

    const [todoInput, setTodoInput] = useState("")
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        setTodos([...todos, todoInput])
        setTodoInput("")
    }

    console.log(todos);

    return (
        <View style={globalStyle.container}>
            <View style ={styles.topContainer}>
                <TextInput
                style = {styles.input}
                onChangeText = {setTodoInput}
                value = {todoInput}
                />
                <Button
                onPress={handleAdd}
                title='Add todo'
                />
            </View>
            <View style={styles.listContainer}>
                {todos.map((todo, index) => <Item key={index} todo={todo} />)}
            </View>
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    topContainer: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        padding: 4,
        backgroundColor: colors.lightBrown,
        fontSize: 14,
        width: 250,
    },
    listContainer: {
        backgroundColor: colors.brown,
        padding: 10,
    }
})