import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import { Background } from '../../assets/Images';



export default class Greeting extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={Background} style={styles.img}>
                    <Text style={styles.title}>Hello, Maria da Silva</Text>    
                </ImageBackground>                                   
            </View>
        )
    }
}
