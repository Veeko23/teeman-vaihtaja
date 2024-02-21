import React from 'react'
import {View, Text} from 'react-native'
import {useTheme} from '../context/UseTheme'
import Styles from '../Styles'

export default function Home() {
    const {isDarkMode} = useTheme()
    console.log(isDarkMode)

    return(
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light} >Home</Text>
        </View>
    )
}