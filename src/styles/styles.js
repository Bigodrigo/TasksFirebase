import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
import { colors } from './colors';
import { Center } from 'native-base';

export const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: colors.blue_primary,
    },
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },    
    imageLogo:{
        width: 150,
        height: 150
    },
    input: {
        borderWidth: 1,
        borderColor: colors.blue_secondary,
        borderRadius: 7,
        marginTop:50,
        width: '80%',
        height: '50',
        fontFamily: fonts.regular,
        padding: 10,
        fontSize: 18,
        color: colors.blue_secondary,
        backgroundColor: colors.blue_secondary,
    },
    containerInputPassword: {
        width: '80%',
        height: '50',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.blue_secondary,
        borderRadius: 7,
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: colors.blue_secondary,
    },
    inputPassword: {
        flex: 1,
        fontFamily: fonts.regular,
        fontSize: 18,
        color: colors.blue_tertiary,
    },
    textResetPassword: {
        color: colors.blue_tertiary,
        fontSize: 16,
        marginTop: 20,
        marginBottom: 30,
    },
    containerTasks: {
        flex: 1,
        width: '100%',
        height: 80,
        borderRadius: 7,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        flexWrap: 'wrap',
        backgroundColor: colors.blue_secondary,

    },
    containerDelete: {
        borderRadius: 7,
        marginHorizontal: 20,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    title: {
        fontSize: 18,
        color: '#FBFBf8',
    },
    //existem propriedades de container em 19:50 do vídeo 7, talvez precise!!
    containerDivision: {
        width: '100%',
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    finishedLine: {
        width: '28%',
        height: 1,
        borderRadius: 1,
        backgroundColor: colors.gray_primary
    },
    finishedText:{
        marginHorizontal:10,
        textAlign: "center",
        color: colors.gray_primary,
        fontFamily: fonts.regular,
        fontSize: 15,
        lineHeight:15,
    },
        containerHeader: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: colors.blue_secondary,
        color: colors.blue_tertiary,
    },
    titleHeader: {
        color: colors.blue_tertiary,
        fontFamily: fonts.bold,
        fontSize: 25,
        paddingTop:10,
    },
    containerNewTask: {
        width:'100%',
        padding: 20,
        backgroundColor: colors.blue_tertiary,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        alignItems: 'center',
    },
    containerButtons:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})