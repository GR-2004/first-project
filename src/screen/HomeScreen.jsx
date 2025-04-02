import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate("Login")
    }
    const handleSignup = () => {
        navigation.navigate("Signup")
    }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Image source={require('../assets/person.png')} style={styles.bannerImage}/>
        <Text style={styles.title}>Lorem ipusm dolor</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit magni velit ad, possimus dicta, vitae facilis rerum repellendus numquam repudiandae ab fugiat?</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButtonWrapper} onPress={handleSignup}>
                <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white
    },
    logo: {
        width: 113,
        height: 39,
        marginVertical: 40
    },
    bannerImage: {
        width: 231,
        height: 250,
        marginVertical: 20
    },
    title: {
        fontSize: 36,
        fontWeight: 600,
        color: colors.primary,
        marginVertical: 10
    },
    description: {
        fontSize: 13,
        marginHorizontal: 50,
        color: colors.secondary,
        textAlign: 'center',
        marginVertical: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: colors.primary,
        width: "40%",
        height: 50,
        borderRadius: 80,
    },
    loginButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
        height: "100%",
        backgroundColor: colors.primary,
        borderRadius: 80,
        cursor: "pointer"
    },

    loginButtonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center'
    },

    signupButtonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
        height: "100%",
        borderRadius: 80
    },
    signupButtonText: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    }
})