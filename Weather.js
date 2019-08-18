import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator ,Alert} from 'react-native';
import PropTypes from 'prop-types';


export default function Weather({temp,condition}){
    return <View style={styles.container}>
        <Text>{temp}</Text>
        </View>
}


Weather.propTyeps = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Rain",
        "Snow",
        "Clear",
        "Drizzle",
        "Clouds",
        "Haze",
        "Atmosphere",
        "Mist"
    ]).isRequired

};


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent:"center",
        alignItems : 'center'

    }
});