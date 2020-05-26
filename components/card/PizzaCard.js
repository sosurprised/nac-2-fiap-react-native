import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { Pizza } from '../../assets/images/Images';

export default class PizzaCard extends React.Component { 
    render() { 
        const { pizza } = this.props;      
        return(     
                <View style={styles.container}> 
                    <Image source={Pizza} style={styles.img} />              
                    <View style={styles.containerColumn}>   
                        <Text style={styles.number}>{pizza.number}</Text>                    
                        <Text style={styles.title}>{pizza.name}</Text>             
                        <Text style={styles.paragraph}>{pizza.description}</Text>
                        <Text style={styles.date}>{pizza.date}</Text>
                    </View>
                   
                   
                </View>
        );
    }
}
