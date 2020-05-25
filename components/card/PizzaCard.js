import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { Pizza } from '../../assets/Images';

export default class PizzaCard extends React.Component { 
    render() { 
        const { name, description } = this.props;      
        return(     
                <View style={styles.container}>
                    <Image source={Pizza} style={styles.img} />
                    <View style={styles.containerColumn}>                      
                        <Text style={styles.title}>{ name }</Text>
                        <Text style={styles.paragraph}>{ description }</Text>
                    </View>
                </View>
        );
    }
}
