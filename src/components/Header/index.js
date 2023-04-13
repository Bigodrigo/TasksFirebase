//Um header que aparece dentro da Home
import React, { useState, useContext } from "react";
import { Alert } from "react-native";
import { Text, IconButton, View } from "native-base";
//firebase
import { auth } from "../../../src/firebase";
import { signOut } from "firebase/auth";
import { CurrentUserContext } from "../../components/Context/User";
//detalhes
import { MaterialIcons } from "@expo/vector-icons";
import { NewTask } from "../NewTask";
import { colors, fonts, styles } from '../../../src/styles';

export function Header ({newTaskIsVisible,setNewTaskIsVisible}) {
  const { logout } = useContext(CurrentUserContext);
  async function handleSignOut() { 
        logout();
        signOut(auth)
        .then(() => {
          Alert.alert('Vc saiu!', 'Deslogou!!'),//Simplificar?
          console.log("Vc saiu!")
          return;
      })
        .catch(error => console.log(error));
        return;          
      };

    return (
      
        <View style={styles.containerHeader} w= "100%" flexDirection= 'row' justifyContent= "space-between" alignItems="center">
          <Text style={styles.titleHeader} >Tarefas</Text>
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