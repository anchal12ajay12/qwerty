import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Hello extends Component {

    goBack() {
        Actions.pop()
    }

    render() {
        return(
            <View style={styles.container}>
                    <Text style={styles.signupText}>Hello </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    signupText: {
      color: '#12799f', 
      fontSize:16
    },
});