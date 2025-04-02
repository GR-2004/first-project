import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const colors = {
  white: '#FFFFFF',
  gray: '#E5E5E5',
  primary: '#5A67D8',
  secondary: '#718096',
  black: '#333333',
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleBack = () => {
    navigation.navigate('Main');
  };

  const handleSignup = () => {
    navigation.navigate("Signup")
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back-outline" size={24} color={colors.black} />
      </TouchableOpacity>

      {/* Welcome Text */}
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome Back!</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color={colors.secondary} />
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={colors.secondary}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="lock" size={24} color={colors.secondary} />
          <TextInput
            secureTextEntry={!passwordVisible}
            placeholder="Enter your password"
            style={styles.input}
            placeholderTextColor={colors.secondary}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        {/* Alternative Login */}
        <Text style={styles.orText}>or continue with</Text>

        <TouchableOpacity style={styles.googleBtn}>
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.googleBtnText}>Google</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 15,
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 30,
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  formContainer: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: colors.black,
  },
  forgetPasswordText: {
    textAlign: 'right',
    color: colors.primary,
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginBtnText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 14,
    marginVertical: 10,
  },
  googleBtn: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 10,
  },
  googleBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUpText: {
    fontSize: 14,
    color: colors.secondary,
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
