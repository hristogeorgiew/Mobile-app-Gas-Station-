//import liraries
import React, { Component } from 'react';
import {  StyleSheet,} from 'react-native';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';


// create a component
const SignUpForm = () => {
    return (
        <FormContainer>
            <FormInput title="Full Name" placeholder="John Smith" />
            <FormInput title="Email" placeholder="example@email.com" />
            <FormInput title="Password" placeholder="********" />
            <FormInput title="Confirm Password" placeholder="********" />
            <FormSubmitButton title="Регистрация" />
        </FormContainer>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SignUpForm;
