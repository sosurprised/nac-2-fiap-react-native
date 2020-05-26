import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import FooterImg from "../../assets/images/footer-img.png";


export default class Footer extends React.Component {
    render() {
        return(
            <View>
                <Image source={ FooterImg } style={styles.img}/>
            </View>
        )
    }
}
