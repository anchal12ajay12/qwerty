import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Text, View,Button, TextInput,ImageBackground } from 'react-native'; 

import {Actions} from 'react-native-router-flux';


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            phone:'1',
            password: '1'
        }
    }

    saveData =async()=>{
        const {phone,password} = this.state;

        //save data with asyncstorage
        let loginDetails={
            phone: phone,
            password: password
        }

        if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.phone != null && ld.password != null)
                {
                    if (ld.phone == phone && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Phone and Password does not exist!');

                    }
                }

            }catch(error)
            {
                alert(error);
            }
        }
    }

    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('Phone: '+ ld.phone + ' ' + 'password: ' + ld.password);
    }

    render() {
        return(
            <View style={styles.containerView} behavior="padding">
              <ImageBackground style={styles.imageContaimer} source = {require('./group1.png')}>
                        
                <Text style={styles.logoText}>UMID</Text>
                <Text style={styles.createAccount}>Create an account:</Text>
                <TextInput placeholder="Phone no." keyboardType="phone-pad" placeholderColor="#A49A62" style={styles.loginFormTextInput} onChangeText={(phone) => this.setState({phone})} onSubmitEditing={()=> this.password.focus()}/>
                <TextInput placeholder="Password" placeholderColor="#C9AD2F" style={styles.loginFormTextInput} secureTextEntry={true}  onChangeText={(password) => this.setState({password})} ref={(input) => this.password = input} />
        
              
                <TouchableOpacity style={styles.button} onPress={this.goForward}> 
                        <Text style={styles.buttonText} >Get Started</Text>
                </TouchableOpacity>
                 <Text style={styles.loginText}>Already have an account? </Text>
                  <Text style={styles.loginButton}>Sign in</Text>
              </ImageBackground>
             </View>
            
        )
    }
}

const styles = StyleSheet.create({
   
  containerView: {
    alignContent:'center',
    justifyContent:'center'
  },
  
  imageContaimer:{
      width:'100%',
      height:'100%',

      marginTop:-50      
  },
  logoText: {
    fontSize: 60,
    fontWeight: "800",
    marginTop: 100,
    marginBottom: 30,
    textAlign: 'center',
    color:'grey'
  },
  createAccount: {
      fontSize: 30,
      color:'grey',
      fontWeight: "800",
      marginTop: 0,
      marginBottom: 50,
      textAlign: 'center',
    },

  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    width:250,
    alignSelf:'center',
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor:'#FFE572',
    borderColor:'#C9AD2F'
  },
  button: {
    backgroundColor: '#FEEB68',
    borderRadius: 5,
    height: 45,
    width:150,
    alignSelf:'center',
    marginTop:120,
    shadowColor:'black',
      shadowColor: 'black',
      shadowOpacity: 0.3,
      elevation: 6,
      shadowRadius: 10 ,
      shadowOffset : { width: 1, height: 1},
  },
      buttonText:{
          alignSelf:'center',
          marginTop:7,
          fontSize:20,
          color:'#A49A62',
      },
      loginText:{
        alignSelf:'center',
        marginTop:50,
        color:'grey',
        marginLeft:-60,
      },
    loginButton:{
        alignSelf:'center',
        marginTop:-18,
        color:'yellow',
        marginRight:-145
      }
      
});