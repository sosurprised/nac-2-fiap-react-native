import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get("screen").height*0.2;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        alignSelf:'center',
        height: '30%',
        width: '95%',
        backgroundColor: '#e63b00',
        marginVertical: 4
    },
    containerColumn :{
        flexDirection : 'column',
    },
    containerRightAlign:{
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    img: {    
        height: height,
        width: height,
        flexDirection: 'row'
    },
    title:{   
        fontSize: 30,
        fontWeight:'bold',
    },
    paragraph:{
        fontSize:14,
        width: '40%',
    }
});

export default styles;