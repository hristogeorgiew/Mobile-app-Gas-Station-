//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FormContainer from '../FormContainer/FormContainer';

// create a component
const SignUpForm = () => {
    return (
        <FormContainer>
            <Text style={{fontSize: 50,  fontWeight: 'bold'}}>Регистрация</Text>
        </FormContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default SignUpForm;
