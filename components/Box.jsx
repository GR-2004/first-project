import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.firstBox, styles.firstText]}>
        <Text>First Box</Text>
      </View>
      <View style={styles.secondBox}>
        <Text>Second Box</Text>
      </View>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstBox: {
        backgroundColor: 'red',
        width: "50%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    secondBox: {
        backgroundColor: 'green',
        width: "50%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    }
})