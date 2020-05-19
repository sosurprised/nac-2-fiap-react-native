  
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 4,
        marginHorizontal: 12,
        backgroundColor: '#e63b00',
        borderBottomColor: '#e63b00',
        borderBottomWidth:  2,
        width: 200
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#feffff'
    }
});

export default styles;