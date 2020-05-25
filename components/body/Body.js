import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import { Background } from '../../assets/Images';
import  PizzaCard  from '../card/PizzaCard';
import data from '../../assets/data/data';

export default class Body extends React.Component {

    render() {
        return(
            <View style={styles.container}>  
                <ImageBackground source={Background} style={styles.img}>
                    <Text style={styles.title}>Hello, Maria da Silva</Text>
                    <ScrollView>
                        {
                        data.map((pizza, index) =>
                            <PizzaCard key={index} description={pizza.description} name={pizza.name} />        
                        )
                        }
                    </ScrollView>
                </ImageBackground>                                   
            </View>
        )
    }
}
