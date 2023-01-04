//por enquanto igual ao vídeo
import React from "react";
import { NativeBaseProvider, Center, VStack, HStack, Text, Button, IconButton, Spacer, View } from "native-base";
//firebase
import { auth } from "../../src/firebase";
//detalhes
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { NewTask } from "../NewTask";
import { colors } from "../../src/styles";

export function Header ({newTaskIsVisible,setNewTaskIsVisible}) {

     function signOut() { 
        //console.log("Tentando Sair!")
        signOut(auth)
        .then(() => {
          Alert.alert('Vc saiu!', 'Deslogou!!'),
          console.log("Vc saiu!")
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
              onPress={()=> signOut(auth)}
              />
          </View>
          
        </View>
      
    )
}