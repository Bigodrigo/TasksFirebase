//por enquanto igual ao vídeo
import React from "react";
import { Alert } from "react-native";
import { Text, IconButton, View } from "native-base";
//firebase
import { auth } from "../../../src/firebase";
import { signOut } from "firebase/auth";
//detalhes
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { NewTask } from "../NewTask";
import { colors, fonts } from '../../../src/styles';

export function Header ({newTaskIsVisible,setNewTaskIsVisible,logado,setLogado}) {

  async function handleSignOut() { 
        //console.log("Tentando Sair!")
        signOut(auth)
        .then(() => {
          Alert.alert('Vc saiu!', 'Deslogou!!'),
          console.log("Vc saiu!")
          setLogado(false)
          return;
      })
        .catch(error => console.log(error));
        return;          
      };

    return (
      
        <View style={styles.container} w= "100%" flexDirection= 'row' justifyContent= "space-between" alignItems="center">
          <Text style={styles.title} >Tarefas</Text>
          <View flexDirection='row'  >
              <IconButton 
              size = {"lg"}
              mx = {2}
              variant="ghost"
              _icon={{ as: MaterialIcons, color: colors.blue_tertiary, name: newTaskIsVisible ? 'close' : "add"}}
              onPress={()=>setNewTaskIsVisible(!newTaskIsVisible)}
              />
              <IconButton
              size={"lg"}
              mx ={2}
              variant="ghost"
              _icon={{ as: MaterialIcons, name: "logout", color: colors.blue_tertiary}}
              onPress={()=> handleSignOut(auth)}
              />
          </View>
          
        </View>
      
    )
}