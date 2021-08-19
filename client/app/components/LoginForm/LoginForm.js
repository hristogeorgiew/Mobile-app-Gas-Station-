//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

// create a component
const LoginForm = () => {
    return (
        <FormContainer>
            <FormInput title="Email" placeholder="example@email.com" />
            <FormInput title="Password" placeholder="********" />
            <FormSubmitButton title="Влез"/>
        </FormContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default LoginForm;
