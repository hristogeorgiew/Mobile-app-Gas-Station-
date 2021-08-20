//import liraries
import React, { useState } from 'react';
import { Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { isValidEmail, isValidObjectField, updateError } from '../../utils/methods';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';

// create a component
const LoginForm = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('');

    const { email, password } = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value});
    }

    const isValidForm = () => {

        if(!isValidObjectField(userInfo)) return updateError('Required all fields!', setError);
        
        if(!isValidEmail(email)) return updateError('Invalid EMAIL!', setError);
        
        if(!password.trim() || password.length < 8) return updateError('Password is less then 8 characters!', setError);
        
        return true;
    }

    const submitForm = ( ) => {
        if(isValidForm()) {
            console.log(userInfo);
        }
    }

    return (
        <FormContainer>
            {error ? (
                <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
                    {error}
                </Text> 
            ): null}
            <FormInput
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                value={email} 
                label="Email" 
                placeholder="example@email.com"
                autoCapitalize="none" 
            />
            <FormInput
                onChangeText={(value) => handleOnChangeText(value, 'password')} 
                value={password} 
                label="Password" 
                placeholder="********"
                autoCapitalize="none"
                secureTextEntry 
            />
            <FormSubmitButton onPress={submitForm} title="Влез"/>
        </FormContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default LoginForm;
