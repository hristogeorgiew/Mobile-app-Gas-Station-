//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const FormHeader = ({leftHeading, rightHeading, subHeading}) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    {leftHeading}
                </Text>
                <Text style={styles.heading}>
                    {rightHeading}
                </Text>
            </View>
            <Text style={styles.subHeading}>
                {subHeading}
            </Text>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#1b1b33"
    },

    subHeading: {
        fontSize: 18,
        color: "#1b1b33",
        textAlign: 'center'
    }
});

//make this component available to the app
export default FormHeader;
