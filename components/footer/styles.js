import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height*0.07;
const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems: 'center',
    },
    img: {
        height: height,
        width: width    
    }
});

export default styles;