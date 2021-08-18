import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import FormHeading from './app/components/FormHeader/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn/FormSelectorBtn';
import LoginForm from './app/components/LoginForm/LoginForm';
import SignUpForm from './app/components/SignUpForm/SignUpForm';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: 60}}>
        <View style={{height: 80}}>
            <FormHeading 
              leftHeading="Welcome " 
              rightHeading="Back"
              subHeading="Nsys App"
            />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <FormSelectorBtn 
            style={styles.borderLeft} 
            backgroundColor='rgba(27,27,51, 1 )' 
            title="Влез" 
          />
          <FormSelectorBtn 
            style={styles.borderRight}  
            backgroundColor='rgba(27,27,51,0.4 )' 
            title="Регистрация" 
          />
        </View>
        <ScrollView 
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          
          <LoginForm />
          <SignUpForm />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },

  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }

});
