import { View, Text, StyleSheet, TextInput, Pressable,Button ,Image} from "react-native";
import React from "react";
import { useState } from "react";
import * as Font from 'expo-font';
import{logo} from '../img/logo.png'
const Login = () => {
    const [fontsLoaded] = Font.useFonts({
        'poppins': require('../fonts/Poppins-Black.ttf'),
        'gwe':require('../fonts/Gwendolyn-Bold.ttf')
      });
      const [username ,setusername]=useState()
      const [pwd ,setpwd]=useState()
      const handlelogin=()=>{
        console.log(username,pwd)
        setusername('')
        setpwd('')
      }
  return (
    <View style={styles.con}>
      <Text style={styles.titles}>Welcome Hello!!</Text>
      <Text style={styles.subtiltle}>Login</Text>
      <View>
      <View style={styles.inputfield}>
          <Pressable>
            <TextInput value={username} onChangeText={setusername} style={styles.value} placeholder="Enter Username"/>
          </Pressable>
        </View>
        <View style={styles.inputfield}>
          <Pressable>
            <TextInput secureTextEntry value={pwd} onChangeText={setpwd} style={styles.value} placeholder="Enter Password" />
          </Pressable>
        </View>
        <View style={styles.but}>
            <Button onPress={handlelogin} color="#ee82ee" title="Login"/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    con:{
        marginTop:100
    },
  titles: {
    fontSize: 25,
    marginBottom: 10,
    textAlign:'center',
    fontFamily:'poppins',
    color:'white'
  },
  subtiltle: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: "center",
    fontFamily:'gwe',
    color:'white'
  },
  inputfield:{
    margin:20,
    borderColor:'white',
    borderWidth:2,
    borderRadius:10,
    width:"90%",
    color:'white'
  },
  value:{
    padding:10,
    color:'white',
    marginLeft:5,
    fontSize:18
  },
  but:{
     width:'25%',
     marginHorizontal:130,
     margin:40,
     color:'white'
  }
});

export default Login;
