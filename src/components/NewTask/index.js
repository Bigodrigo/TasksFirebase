//por enquanto igual ao vídeo
//Poderia mudar os styles igual os outros!
import React, { useState } from "react";
import { NativeBaseProvider, Center, VStack, HStack, Text, Button, IconButton, Spacer, View } from "native-base";
//firebase
import { auth } from "../../../src/firebase";
//detalhes
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../Input";
import { colors, fonts, styles } from '../../../src/styles';

export function NewTask ({addNewTask}) {
  const [ task, setTask ] = useState('');

  function AddTaskAction() {
    if(task == '') return;

    addNewTask(task);
    setTask('');
  };

  function deleteTaskLetterByLetter() {
    const taskTextReduced = task.substring(0, task.length - 1);
    setTask(taskTextReduced);
  };

    return (
            <View style={styles.containerNewTask} >
                <Input
                  //provavelmente vai dar errado! Olhar o Login para mudar o onchangetext e value!! Hover!
                  value={task}
                  onChangeText={value=>setTask(value)}
                  placeholder="Qual sua tarefa?"
                  borderColor = {colors.blue_secondary}
                  borderWidth = {2} 
                  width = '100%'
                  backgroundColor={'transparent'}
                  //fontFamily = {fonts.regular}
                  fontSize = {18}
                  placeholderTextColor= {colors.blue_secondary}
                  pb = {5}
                  color = {colors.blue_secondary}  
                  />
                <View style={styles.containerButtons}>
                  <IconButton size="lg" variant= "solid" bg={colors.blue_secondary}
                  _icon= {{ as: MaterialIcons, name: "backspace", color:colors.blue_tertiary}}
                  onPress={deleteTaskLetterByLetter}
                  />
                  <Button bg={colors.blue_secondary} flex = {1} ml={2} onPress={AddTaskAction}>
                    <Text color = {colors.blue_tertiary} fontSize= {18}
                    fontFamily = {fonts.bold}
                    >ADICIONAR</Text>
                  </Button>
                </View>
            </View>
    )
}