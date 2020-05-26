import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Points } from '../../assets/images/Images';

export default class Header extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Your commands</Text>
                <TouchableOpacity>
                    <Image style={styles.icon} source={Points} />
                </TouchableOpacity>   
            </View>
        )
    }
}
