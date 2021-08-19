//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

// create a component
const FormContainer = ({children}) => {
    return (
        <View style={styles.container}>
           {children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20 
    },
});

//make this component available to the app
export default FormContainer;
