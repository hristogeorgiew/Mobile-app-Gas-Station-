//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const FormInput = ({placeholder, title}) => {
    return (
        <>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            <TextInput placeholder={placeholder} style={styles.input} />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#1b1b33',
        height: 35,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20
    },
});

//make this component available to the app
export default FormInput;
