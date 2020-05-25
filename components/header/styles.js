  
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height*0.13;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        width: width,
        height: height, 
        paddingTop: 35,  
        paddingHorizontal: 10,
        backgroundColor: '#e63b00',
        borderBottomWidth:  2,  
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#feffff',
        fontWeight:'bold',
    }
});

export default styles;