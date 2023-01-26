import React, { useState, useContext } from "react";
import { VStack, NativeBaseProvider, Center, StatusBar, View, Text, ScrollView } from "native-base";
import Task from './Task';

export function TaskList({ tasks, onArchiveTask }) {
  //const [ finishedTasks, setFinishedTasks ] = useState([]);
  const events = {
    onArchiveTask,
  };

  return (
    <NativeBaseProvider>
        <VStack>
            <Center>
            {tasks.map((task) => (
                <Task key={task.id} task={task} {...events} />
            ))}
            </Center>
        </VStack>
    </NativeBaseProvider>
  );
}