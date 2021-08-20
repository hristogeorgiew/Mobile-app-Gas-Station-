//import liraries
import React, { useState } from 'react';
import {  StyleSheet, Text} from 'react-native';
import { isValidEmail, isValidObjectField, updateError } from '../../utils/methods';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';



// create a component
const SignUpForm = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('');

    const {fullName, email, password, confirmPassword} = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value});
    }

    const isValidForm = () => {
       if(!isValidObjectField(userInfo)) return updateError('Required all fields!', setError);

       if(!fullName.trim() || fullName.length < 3) return updateError('Invalid name!', setError);

       if(!isValidEmail(email)) return updateError('Invalid EMAIL!', setError);

       if(!password.trim() || password.length < 8) return updateError('Password is less then 8 characters!', setError);

       if(password !== confirmPassword) return updateError('Password does not match!', setError);
        
       return true;
    }

    const submitForm = () => {
        if(isValidForm()){
            //submit Form
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
                onChangeText={(value) => handleOnChangeText(value, 'fullName')} 
                label="Full Name" 
                placeholder="John Smith"
                value={fullName} 
            />
            <FormInput
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                value={email} 
                autoCapitalize="none" 
                label="Email" 
                placeholder="example@email.com" 
            />
            <FormInput
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                value={password} 
                autoCapitalize="none"
                secureTextEntry 
                label="Password" 
                placeholder="********" 
            />
            <FormInput
                onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
                value={confirmPassword} 
                autoCapitalize="none"
                secureTextEntry 
                label="Confirm Password" 
                placeholder="********" 
            />
            <FormSubmitButton onPress={submitForm} title="Регистрация" />
        </FormContainer>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default SignUpForm;
