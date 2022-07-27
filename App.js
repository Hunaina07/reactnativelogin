/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Card } from '@mui/material';
import { style, textAlign } from '@mui/system';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StyleSheetContext } from 'styled-components';

import logo from './images/logo.jpg';
import back from './images/back.jpg'
  

const App = () => {
  return (
    // login 1 screens

  // <View style = {styles.container}>
  //  <View style = {styles.header}>
  //  <Image source = {logo}/>
  //  < Text style = {{fontSize : 30 , color : 'white'}}>Welcome!</Text>
  //  </View>
  //  <View style = {styles.footer}>
  //   <Text>Email </Text>
  //   <View>
  //   <TextInput style = {styles.textinput} placeholder='Enter your Email'/>

  //   </View>
  //   <Text>Password</Text>
  //   <View>
  //     <TextInput style = {styles.textinput} placeholder='Enter your password'></TextInput>
  //   </View>
  //   <TouchableOpacity >
  //   <View style = {styles.btn}>
  //     <Text style = {{textAlign : 'center' , color : 'white'}} onPress = {()=>alert("you are login")}>Login</Text>
  //   </View>
  //   </TouchableOpacity>
  //   </View>
  //  </View>

   // login 1 screens
  //  login 2 screens

  // <View style = {styles.container}>
  //   <View style = {styles.main}>
  //     <Text style = {{color  : 'white' , fontSize : 30 , textAlign : 'center'}}>Login</Text>
  //    <View style = {styles.inputContainer}>
  //    <TextInput  label = "Email" placeholder='Enter Email'  />
  //   </View>
  //   <View style = {styles.inputContainer}>
  //    <TextInput label = "Password" placeholder='Enter Password'  />
  //   </View>
  //   <View>
  //     <Text   style = {styles.inputContainer} >Forgot email / password</Text>
  //     <TouchableOpacity>
  //       <View>
  //     <Text  style = {{textAlign : 'center' ,color :'white' ,backgroundColor : '#674d3c' , padding : 10}}>Login</Text>
  //     </View>
  //     </TouchableOpacity>
  //     <Text style = {{textAlign : 'center' , color : 'white'}}>Register</Text>
  //   </View>
  //   </View>
  //   </View>
   //  login 2 screens
  //  login 3 screens
    //  <SafeAreaView>
    //   <View style = {Styles.header}>
    //    <Text style = {{marginTop : 60,textAlign : 'center' ,fontSize : 30,color : 'white' }}> Login</Text>
    //   </View>
    //   <View style = {Styles.footer}>
    //   <Text style = {{textAlign : 'center' , color : '#36486b' ,fontSize : 18}}> Login Here</Text>
    //   <TextInput  placeholder='Email'/>
    //   <TextInput  placeholder='Password'/>
    //     </View>
    //     <View style = {Styles.btn}>
    //     <TouchableOpacity>
    //       <Text onPress={()=>alert("you are login")} style = {{color : 'white' , backgroundColor : '#36486b' , textAlign : 'center',paddingHorizontal : 30 , paddingVertical : 10}}>Login</Text>
    //       </TouchableOpacity>
    //       <Text style = {{color :'#36486b'}}>Dont have an account ? Register Now</Text>
    //     </View>
    //  </SafeAreaView>
  //  login 3 screens
  //  login 4 screens
//   <View style = {Styles.container}>
//     <StatusBar backgroundColor = "#1e90ff" barStyle="Light-content"/>
//   <Text style = {Styles.welcome}>Login To My App</Text>
//   <TextInput style = {Styles.input}  placeholder = 'Username'/>
//   <TextInput style = {Styles.input} secureTextEntry placeholder = 'Password'/>
// <View style = {Styles.btnContainer}>
// <TouchableOpacity style = {Styles.userbtn}>
//   <Text style = {Styles.btnTxt} onPress = {()=>alert("you are login")}>Login</Text>
// </TouchableOpacity>
// <TouchableOpacity  style = {Styles.userbtn}>
//   <Text style = {Styles.btnTxt } onPress = {()=>alert("Signup works")}>Signup</Text>
// </TouchableOpacity>
// </View>
// </View>

  //  login 4 screeens
  //  login 5
  <View style = {styles.container}>
<ImageBackground style = {styles.image}source = {back}  resizeMode="cover">
<Text style = {styles.head}>Login</Text>
<View>
  <Text>Email</Text>
  <TextInput style = {styles.input}placeholder='Enter Email'/>
  <Text>Password</Text>
  <TextInput style = {styles.input} placeholder='Enter password'/>
</View>
<TouchableOpacity style = {styles.userbtn}>
    <Text onPress={()=>alert("you are login")} style = {styles.btntxt}>LOGIN</Text>
</TouchableOpacity>
</ImageBackground>
  </View>
   //  login 5
  );
};
// style login 1 screens

// const styles = StyleSheet.create({
// container :{
//   flex : 1,
//   backgroundColor :'#009387'
// },
// header : {
//   flex : 1,
//   justifyContent : 'center',
//   alignItems : 'center'
// },
// footer : {
//   flex : 1,
//   backgroundColor : '#fff',
//   borderTopLeftRadius : 30,
//   borderTopRightRadius :  30,
//   paddingVertical : 50,
//   paddingHorizontal : 30,
// },
// btn : {
//   backgroundColor : '#009387',
//   padding : 18,
// },

// });
// style login 1 screens

//  style login 2 screens

// const styles = StyleSheet.create({
//   inputContainer:{
//    backgroundColor : 'white',
//    paddingHorizontal : 30,
//    paddingVertical : 10,
//    color : '#674d3c',
//   },
//   container:{
//     flex : 1,
//     backgroundColor : '#a2836e',
//     alignItems : 'center',
//     justifyContent : 'center',
//   },
// })

//  style login 2 screens
// style login 3 screens
// const Styles = StyleSheet.create({
//   header : {
//     height : 150,
//     borderBottomLeftRadius : 50,
//     borderBottomRightRadius : 50,
//     backgroundColor : '#36486b',
//     shadowColor : '#000',
//     elevation : 25,
//   },
//   footer:{
//       color : 'white',
//       textAlign : 'center',
//       marginTop : 90,
     
//   },
//  btn : {
//   width : '80%',
//   alignItems :'center',
//   borderRadius : 30,
//   evaluation : 30,
//   marginTop : 40,
 

//  }
// })
// style login 3 screens
// style login 4 screeens
// const Styles = StyleSheet.create({
//   container:{
//     flex : 1,
//     justifyContent : 'center',
//     alignItems : 'center',
//     backgroundColor : '#1e90ff',
//   },
//   welcome : {
//     fontSize : 30,
//     textAlign : 'center',
//     margin : 10,
//     color : '#fff',
//   },
//   input : {
//     width : '90%',
//     backgroundColor : '#fff',
//     padding : 15,
//     marginBottom : 10,
//   },
//   userbtn:{
//     backgroundColor : '#FFD700',
//     padding : 15,
//     width : '45%',
//   },
//   btnTxt : {
//     fontSize : 18,
//     textAlign : 'center'
//   },
//   btnContainer:{
//     flexDirection : 'row',
//     justifyContent : 'space-between',
//     width : '90%',
//   }
// })
// style login 4 screeens
// style login 5 screens
const styles = StyleSheet.create ({
  image :{
    flex : 1,
  },
  container : {
    flex : 1,
  },
  head :{
     color :'black',
     textAlign : 'center',
     fontSize : 30,
     fontWeight : 'bold',
     marginTop : 90,
  },
  input:{
    width : '90%',
    backgroundColor : '#fff',
    padding : 15,
    marginBottom : 10,
    marginTop : 10,
  },
  userbtn :{
    backgroundColor :'#e0e2e4',
    padding : 15,
    width : '45%',
  },
  btntxt : {
    fontSize : 18,
    textAlign : 'center',
  },
 



})

// style login 5 screens
export default App;
