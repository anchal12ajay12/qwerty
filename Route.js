import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Hello from './Hello.js';
import Form from './Form.js';

export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#FFDD31',}} 
                titleStyle={{color: '#FFDD31',}}
            >
                <Stack key="root">
                <Scene key="Form" component={Form} />
                <Scene key="Hello" component={Hello} />
                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: '#FFDD31',
        width:0
    }
}