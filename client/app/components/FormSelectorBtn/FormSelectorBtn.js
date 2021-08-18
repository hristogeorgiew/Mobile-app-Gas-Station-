//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

// create a component
const FormSelectorBtn = ({title, backgroundColor, style}) => {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, style, {backgroundColor}]}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 45, 
        width: '50%', 
        backgroundColor: '#1b1b33', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        color: 'white', 
        fontSize: 16
    }
});

//make this component available to the app
export default FormSelectorBtn;
