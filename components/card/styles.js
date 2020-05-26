import { StyleSheet, Dimensions } from 'react-native';


const height = Dimensions.get("screen").height*0.2;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
        alignSelf:'center',
        height: '28%',
        width: '95%',
        backgroundColor: '#e04b3a',
        marginVertical: 4
    },
    containerColumn :{
        flexDirection : 'column',
    },
    containerRow:{
        flexDirection: 'row', 
    },
    img: {    
        height: height,
        width: height,
        flexDirection: 'row',
    },
    title:{   
        fontSize: 30,
        fontWeight:'bold',
        flexDirection : 'column',
    },
    paragraph:{
        fontSize:14,
        width: '40%',
    },
    date:{
        flexDirection : 'row',
        position:'relative',
        left: 90,
        top: 10,
        bottom: 0,
        right: 0,
    },
    number:{
        fontSize: 20,
        flexDirection : 'row',
        position:'relative',
        left: 170,
        top: 0,
        bottom: 0,
        right: 0,
        fontWeight: 'bold'       
    }
});

export default styles;