import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import userIcon from './assets/userIcon.png'
import passwordIcon from './assets/passwordIcon.png'
import road from './assets/road.jpeg'
import lake from './assets/lake.jpg'
import highway from './assets/highway.jpg'
import LinearGradient from 'react-native-linear-gradient'


function App() {

  let [userName, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (

    // ------------------------------- Login 1 -------------------------------
    // <View style={[styles.container]}>

    //   <View style={[styles.div, { display: 'flex' }]}>
    //     <Image source={userIcon} style={
    //       // [styles.img, 
    //       { width: 120, height: 120, alignSelf: 'center', opacity: 0.5 }
    //       // ]
    //     } resizeMode='stretch' />
    //     <Text style={[styles.heading]}>Login</Text>
    //     <TextInput
    //       style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //       placeholder='Enter name'
    //       value={userName}
    //       onChangeText={(e) => { setUserName(e) }}
    //     />

    //     <TextInput
    //       style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //       placeholder='Password'
    //       secureTextEntry={true}
    //       value={password}
    //       onChangeText={(e) => { setPassword(e) }}
    //     />

    //     <TouchableOpacity>
    //       <Text style={[styles.link]}>Forgot password?</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity >
    //       <LinearGradient colors={['#08d4c4', '#01ab9d', '#008080']}
    //         style={[styles.button]}
    //       >
    //         <Text style={[styles.btnText]}>Login</Text>
    //       </LinearGradient>
    //     </TouchableOpacity>
    //   </View>
    //   <Text>{userName}</Text>
    //   <Text>{('*').repeat(password.length)}</Text>
    // </View>





    // ------------------------------- Login 2 -------------------------------
    // <View style={[styles.container]}>

    //   <View style={[styles.div, { display: 'flex' }]}>
    //     <Text style={[styles.heading]}>Welcome</Text>


    //     <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
    //       <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //       <TextInput
    //         style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //         placeholder='Enter email'
    //         value={email}
    //         onChangeText={(e) => { setEmail(e) }}
    //       />
    //     </View>

    //     <View style={[styles.inputBox, { flexDirection: 'row', alignItems: 'center' }]}>
    //       <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //       <TextInput
    //         style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //         placeholder='Password'
    //         secureTextEntry={true}
    //         value={password}
    //         onChangeText={(e) => { setPassword(e) }}
    //       />
    //     </View>

    //     <TouchableOpacity>
    //       <Text style={[styles.link]}>Forgot password?</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity >
    //       <LinearGradient colors={['#8f94fb', '#4e54c8']}
    //         style={[styles.button]}
    //       >
    //         <Text style={[styles.btnText]}>Login</Text>
    //       </LinearGradient>
    //     </TouchableOpacity>

    //   </View>
    // </View >





    // ------------------------------- Login 3 -------------------------------
    // <View style={[styles.container]}>

    //   <View style={[styles.div, { display: 'flex' }]}>
    //   <Image source={userIcon} style={
    //       // [styles.img, 
    //       { width: 120, height: 120, alignSelf: 'center', opacity: 0.4 }
    //       // ]
    //     } resizeMode='stretch' />
    //     <Text style={[styles.heading]}>Sign In</Text>


    //     <View style={[styles.inputBox]}>
    //       <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //       <TextInput
    //         style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //         placeholder='Enter email'
    //         value={email}
    //         onChangeText={(e) => { setEmail(e) }}
    //       />
    //     </View>

    //     <View style={[styles.inputBox]}>
    //       <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //       <TextInput
    //         style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //         placeholder='Password'
    //         secureTextEntry={true}
    //         value={password}
    //         onChangeText={(e) => { setPassword(e) }}
    //       />
    //     </View>

    //     <TouchableOpacity>
    //       <Text style={[styles.link]}>Forgot password?</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity >
    //       <LinearGradient colors={['#ff9a8a', '#f6998b', '#d87869']}
    //         style={[styles.button]}
    //       >
    //         <Text style={[styles.btnText]}>Sign In</Text>
    //       </LinearGradient>
    //     </TouchableOpacity>

    //   </View>
    // </View >





    // ------------------------------- Login 4 -------------------------------
    <ImageBackground source={road} >
      <View style={[styles.container]}>

        <View style={[styles.div, { display: 'flex', backgroundColor: '#ffffff60' }]}>
          <Image source={userIcon} style={
            { width: 120, height: 120, alignSelf: 'center', opacity: 1 }
          } resizeMode='stretch' />


          <View style={[styles.inputBox]}>
            <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
            <TextInput
              style={[styles.input, { flexDirection: 'column', flex: 0 }]}
              placeholder='Enter email'
              value={email}
              onChangeText={(e) => { setEmail(e) }}
            />
          </View>

          <View style={[styles.inputBox]}>
            <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
            <TextInput
              style={[styles.input, { flexDirection: 'column', flex: 0 }]}
              placeholder='Password'
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => { setPassword(e) }}
            />
          </View>

          <TouchableOpacity>
            <Text style={[styles.link]}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <LinearGradient colors={['#00F700', '#007C00']}
              style={[styles.button]}
            >
              <Text style={[styles.btnText]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </View >
    </ImageBackground>





    // ------------------------------- Login 5 -------------------------------
    // <ImageBackground source={highway} >
    //   <View style={[styles.container]}>

    //     <View style={[styles.div, { display: 'flex', backgroundColor: '#ffffff60' }]}>
    //       <Image source={userIcon} style={
    //         { width: 120, height: 120, alignSelf: 'center', opacity: 1 }
    //       } resizeMode='stretch' />


    //       <View style={[styles.inputBox]}>
    //         <Image source={userIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //         <TextInput
    //           style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //           placeholder='Enter email'
    //           value={email}
    //           onChangeText={(e) => { setEmail(e) }}
    //         />
    //       </View>

    //       <View style={[styles.inputBox]}>
    //         <Image source={passwordIcon} style={{ width: 26, height: 26, opacity: 0.3, marginRight: 5 }} />
    //         <TextInput
    //           style={[styles.input, { flexDirection: 'column', flex: 0 }]}
    //           placeholder='Password'
    //           secureTextEntry={true}
    //           value={password}
    //           onChangeText={(e) => { setPassword(e) }}
    //         />
    //       </View>

    //       <TouchableOpacity>
    //         <Text style={[styles.link]}>Forgot password?</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity >
    //         <LinearGradient colors={['#0D95E8', '#344E86']}
    //           style={[styles.button]}
    //         >
    //           <Text style={[styles.btnText]}>Sign In</Text>
    //         </LinearGradient>
    //       </TouchableOpacity>

    //     </View>
    //   </View >
    // </ImageBackground>

  )
}

export default App


// ------------------------------- Login 1 -------------------------------
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     height: '100%',
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 30,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   div: {
//     width: '100%',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     paddingHorizontal: 15,
//     fontSize: 17,
//     borderWidth: 1,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     borderRadius: 30,
//     borderWidth: 0.1,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   button: {
//     marginVertical: 15,
//     padding: 15,
//     backgroundColor: '#008080',
//     borderRadius: 30,
//     borderWidth: 0.1,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   btnText: {
//     fontSize: 17,
//     color: '#fff',
//     textAlign: 'center'
//   },
//   link: {
//     textAlign: 'right',
//     // textDecorationLine: 'underline',
//     fontStyle: 'italic',
//   },
// });






// ------------------------------- Login 2 -------------------------------
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     height: '100%',
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 30,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   div: {
//     width: '100%',
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   inputBox: {
//     width: '100%',
//     padding: 5,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     borderWidth: 0.1,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   input: {
//     fontSize: 17,
//     width: '90%',
//   },
//   link: {
//     textAlign: 'right',
//     // textDecorationLine: 'underline',
//     fontStyle: 'italic',
//   },
//   button: {
//     marginVertical: 15,
//     padding: 10,
//     backgroundColor: '#008080',
//     borderWidth: 0.1,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   btnText: {
//     fontSize: 17,
//     color: '#fff',
//     textAlign: 'center'
//   },
// })

// ------------------------------- Login 3 -------------------------------
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     height: '100%',
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 30,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   div: {
//     width: '100%',
//   },
//   inputBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     padding: 5,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     borderWidth: 0.1,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   input: {
//     fontSize: 17,
//     width: '90%',
//   },
//   link: {
//     textAlign: 'right',
//     fontStyle: 'italic',
//   },
//   button: {
//     marginVertical: 15,
//     padding: 15,
//     borderWidth: 0.1,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   btnText: {
//     fontSize: 17,
//     color: '#fff',
//     textAlign: 'center'
//   },
// })


// ------------------------------- Login 4 -------------------------------
const styles = StyleSheet.create({
  bgImage: {
    height: '100%',

  },
  container: {
    padding: 20,
    height: '100%',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  div: {
    width: '100%',
    borderRadius: 30,
    padding: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 0.1,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    fontSize: 17,
    width: '90%',
  },
  link: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
  button: {
    marginVertical: 15,
    padding: 15,
    borderWidth: 0.1,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center'
  },
})


// ------------------------------- Login 5 -------------------------------
// const styles = StyleSheet.create({
//   bgImage: {
//     height: '100%',

//   },
//   container: {
//     padding: 20,
//     height: '100%',
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 30,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   div: {
//     width: '100%',
//     borderRadius: 30,
//     padding: 8,
//   },
//   inputBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     padding: 5,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     borderWidth: 0.1,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   input: {
//     fontSize: 17,
//     width: '90%',
//   },
//   link: {
//     textAlign: 'right',
//     fontStyle: 'italic',
//   },
//   button: {
//     marginVertical: 15,
//     padding: 15,
//     borderWidth: 0.1,
//     borderRadius: 30,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   btnText: {
//     fontSize: 17,
//     color: '#fff',
//     textAlign: 'center'
//   },
// })
