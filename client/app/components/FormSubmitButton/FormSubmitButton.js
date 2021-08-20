//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component
const FormSubmitButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'rgba(27,27,51,1)',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export default FormSubmitButton;
