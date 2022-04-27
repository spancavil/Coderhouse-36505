import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'

const ScreenA = ({navigation}) => {

    const [status, setStatus] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Coderhouse - testing with React Nativo</Text>
            <TouchableOpacity
                testID='myButton'
                onPress={() => setStatus(!status)}>
                    <Text>Change status</Text>
            </TouchableOpacity>
            <Text testID='myText'>{status.toString()}</Text>
            <TouchableOpacity
                testID='navButton'
                onPress={() => navigation.navigate("Screen B")}>
                    <Text>Go to Screen B</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({})