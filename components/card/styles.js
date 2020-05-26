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
        paddingLeft: 78,
        paddingTop: 10,
    },
    number:{
        fontSize: 20,
        flexDirection : 'row',
        paddingLeft: 170,
        fontWeight: 'bold'       
    }
});

export default styles;