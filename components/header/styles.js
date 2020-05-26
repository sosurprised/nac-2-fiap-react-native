  
import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get("screen").height*0.13;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        width: width,
        height: height, 
        paddingTop: 35,  
        paddingHorizontal: 10,
        backgroundColor: '#e04b3a',
        borderBottomWidth:  2,  
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#feffff',
        fontWeight:'bold',
    },
    icon: {
        width: 35,
        height: 35,
        position:'relative',
        left: 160,
        top: 0,
        bottom: 0,
        right: 0,
    }

});

export default styles;