import { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Image, FlatList} from 'react-native';
import Item from '../Components/Item';
import globalStyle from '../Styles/Global';
import { colors } from '../Styles/Global';

const fnRenderItem = ({item}) => {
    return(<Item todo={item}></Item>)
}

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
            <Image
                resizeMode= "cover" 
                style = {styles.image}
                source = {require('../assets/todo.webp')}
            />
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
            {todos.length !== 0 && (
                <FlatList style={styles.listContainer}
                data={todos}
                renderItem={fnRenderItem}
                keyExtractor={(todo,index) => index.toString()}
                />
            )}
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
    },
    image: {
        width: '100%',
        height: 200,
    }
})