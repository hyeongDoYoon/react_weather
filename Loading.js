import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking wehater</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent : "flex-end",
        paddingHorizontal : 30, /**리엑트 네이트브에서 제공함 */
        paddingVertical : 100,
        backgroundColor : '#FDF6AA'
    },
    text:{
        color : '#2c2c2c',
        fontSize : 30
    }
});