import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity} from 'react-native';
import { Avatar } from "react-native-elements";

function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginApi = () => {
        fetch('http://127.0.0.1:5000/login',{
            method : 'POST',
            headers :{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email,password:password})
        })
        .then(resp => resp.json())
        .then((jsonData) => {
            console.log(JSON.stringify(jsonData));
        })
        .catch((e) => {
            console.log(e)
        })
    }
    const [fontsLoaded] = useFonts({
        'Kenia-Regular': require('../assets/fonts/Kenia-Regular.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

      return (
        <SafeAreaView>
          <StatusBar style="auto" />
          <ImageBackground source={require('../assets/logo.jpg')} resizeMode="cover" style={{
          width: '100%',
          height: '100%' }}
          >
            <Text style={styles.font}>My Buddy</Text>
            <Avatar 
            size={200}
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            containerStyle={{marginTop:10,marginLeft: 95,marginBottom:0}}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={this.loginApi}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          
        </ImageBackground>
        </SafeAreaView>
      );
    }

export default LoginPage

const styles = StyleSheet.create({

    font:{
    marginTop:140,
    textAlign:"center",
    fontSize:50,
    color:"white",
    textShadowColor:"black",
    fontFamily:'Kenia-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 4, height: 5},
    textShadowRadius: 10
    
    },
    inputView: {

    backgroundColor: "#FFC0CB",
    borderRadius: 15,
    width: "80%",
    height: 55,
    marginBottom: 23,
    alignItems: "center",
    justifyContent:"center",
    marginLeft:"10%"
    },
    TextInput: {
    height: 50,
    padding: 10,
    marginLeft: 10,

    },

    forgot_button: {
    height: 30,
    marginLeft:"35%"
    },
    
    loginBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#FF1493",
    marginLeft:"10%"
    },
});

    


