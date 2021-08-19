import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Animated, Dimensions} from 'react-native';
import FormHeading from './app/components/FormHeader/FormHeader';
import FormSelectorBtn from './app/components/FormSelectorBtn/FormSelectorBtn';
import LoginForm from './app/components/LoginForm/LoginForm';
import SignUpForm from './app/components/SignUpForm/SignUpForm';

const {width} = Dimensions.get('window');

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef()

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  })

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  })

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  })

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,1 )', 'rgba(27,27,51,0.4)']
  })
  const signUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
  })

  return (
    <View style={{flex: 1, paddingTop: 120}}>
        <View style={{height: 80}}>
            <FormHeading 
              leftHeading="Welcome " 
              rightHeading="Back"
              subHeading="Nsys App"
              rightHeaderOpacity={rightHeaderOpacity}
              leftHeaderTranslateX={leftHeaderTranslateX}
              rightHeaderTranslateY={rightHeaderTranslateY}
            />
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 20, marginBottom: 20}}>
          <FormSelectorBtn 
            style={styles.borderLeft} 
            backgroundColor={loginColorInterpolate} 
            title="Влез"
            onPress={() => scrollView.current.scrollTo({x: 0})} 
          />
          <FormSelectorBtn 
            style={styles.borderRight}  
            backgroundColor={signUpColorInterpolate}
            title="Регистрация"
            onPress={() => scrollView.current.scrollTo({x: width})}  
          />
        </View>
        <ScrollView
          ref={scrollView} 
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: animation}}}], {useNativeDriver: false})}
        >
          
          <LoginForm />
          <ScrollView>
          <SignUpForm />
          </ScrollView>
          
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
