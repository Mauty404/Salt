import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const AdvertTile = () => {
    return(
        <View style={styles.tile}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.photo}/>
                <View>
                    <Text style={styles.title}>Nektar pomarańczowy 5.99 zł</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tile: {
        height: '23%',
        width: '97%',
        backgroundColor: '#0F0F41'
    },
    photo: {
        margin: '2%',
        width: 80,
        height: 80,
        backgroundColor: 'red'
    },
    title: {
        color: 'white'
    }
})

export default AdvertTile;