import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';



export default class Header extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Your commands</Text>
            </View>
        )
    }
}
