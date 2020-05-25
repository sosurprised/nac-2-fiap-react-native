  
import { Dimensions , StyleSheet } from 'react-native';

const height = Dimensions.get("screen").height*0.75;
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        width: width,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        fontWeight:'bold',
        color: '#feffff',
        margin: 10
    },
    img: {
        height: height,
        width: width     
    }
});

export default styles;