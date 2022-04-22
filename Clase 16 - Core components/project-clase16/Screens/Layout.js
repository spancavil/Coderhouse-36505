import { Button, TextInput, View, StyleSheet} from 'react-native';
import Item from '../Components/Item';
import globalStyle from '../Styles/Global';
import { colors } from '../Styles/Global';

const Layout = () => {
    return (
        <View style={globalStyle.container}>
            <View style ={styles.topContainer}>
                <TextInput
                style = {styles.input}
                />
                <Button
                title='Add todo'
                />
            </View>
            <View style={styles.listContainer}>
                <Item/>
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
    },
    listContainer: {
        backgroundColor: colors.brown,
        padding: 10,
    }
})