//Essa Tasks foi feita para rodar no SB! Ela é um pouco diferente do código real!!
import React, { useState } from "react";
import { NativeBaseProvider, Center, VStack, HStack, Text, Button, IconButton, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { Swipeable } from "react-native-gesture-handler";

import { colors, styles } from '../../../styles';

export function Task({ task: { id, title, isFinished }, onArchiveTask }) {
    return (
        <Swipeable
            renderRightActions={() => (
                <IconButton size="lg" variant= "ghost" bg={colors.blue_secondary} style={styles.containerDelete}
                onPress={()=> onArchiveTask(id)}
                _icon= {{ as: MaterialIcons, 
                    name : isFinished ? "delete-forever" : "done" ,
                    color: isFinished ? colors.red_primary : colors.blue_tertiary
                }}
                />
                )}
            containerStyle={{
                paddingHorizontal: 20,
                marginTop: 10,
            }}
        >
            <View style={styles.containerTasks} height={80}>
                <Text 
                color={'white'}
                style={styles.title}
                >{title}</Text>
            </View>
        </Swipeable>
    )}