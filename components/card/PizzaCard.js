import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';



export default class PizzaCard extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Your commands</Text>
                <Image src='' />
            </View>
        )
    }
}
