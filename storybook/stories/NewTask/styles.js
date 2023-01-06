import { Center, theme, useTheme } from 'native-base';
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../src/styles';
//as vezes parece q n exporta direito!! Está diferente do vídeo
import { MaterialIcons } from "@expo/vector-icons";

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 20,
        backgroundColor: colors.blue_tertiary,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        alignItems: Center,
    },
    containerButtons:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
