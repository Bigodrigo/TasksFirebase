import React, { useState, useContext } from "react";
import { VStack, NativeBaseProvider, Center, StatusBar, View, Text, ScrollView } from "native-base";
//importar cores e estilos?
import { fonts, colors, styles } from "../../styles";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { Loading } from "../../components/Loading";

import { randomKey } from "../../utils/randomKey";
import { deleteDoc, doc, serverTimestamp, setDoc, query,getDocs, collectionGroup, withConverter } from "firebase/firestore";
import { db } from "../../firebase";
import { CurrentUserContext } from "../../components/Context/User";
import { taskConverter, TaskFB } from "../../utils/converter";
import { removeBarra, recuperaBarra } from "../../utils/scripts"; 

export  function Home ({children}) {
  //Importante! Percebi que o FB não lida bem com / acaba criando pastas no BD, adicionei o script q modifica isso!
  const [ tasks, setTasks ] = useState([]);
  const [ finishedTasks, setFinishedTasks ] = useState([]);
  const [ newTaskIsVisible, setNewTaskIsVisible ] = useState(false);
  const [ downloadingTasks, setDownloadingTasks ] = useState(true);
  const {uid, name, email, logado, setLogado, logout} =  useContext(CurrentUserContext);

  async function addNewTask(content) {   
    const taskObject = { 
      content: content,
      date: serverTimestamp(),
      id: randomKey(),
      isFinished: false,
    };
    const docRef = doc(db,uid,removeBarra(taskObject.content)).withConverter(taskConverter)
    await setDoc(docRef, new TaskFB(removeBarra(taskObject.content),taskObject.date,taskObject.id,taskObject.isFinished)) //sobrescreve!! {[taskObject.content]:taskObject},{merge:true} //,[taskObject.content]),taskObject
      .then(() => {
        setTasks([taskObject, ...tasks])
      });
  };
  
  async function taskCompleted(id) {
    setTasks(tasks.filter(item => item.id !== id));
    
    const taskCompleted = tasks.filter(item => item.id == id);
    let newFinishedTasks = finishedTasks;
    
    const taskObject = {
      content: taskCompleted[0].content,
      date: taskCompleted[0].date,
      id: randomKey(),
      isFinished:true,
    };
    const docRef = doc(db,uid,removeBarra(taskObject.content)).withConverter(taskConverter)
    await setDoc(docRef, new TaskFB(removeBarra(taskObject.content),taskObject.date,taskObject.id,taskObject.isFinished),{merge:true}) //sobrescreve!!,{merge:true}
    .then(() => {
      setFinishedTasks([taskObject, ...newFinishedTasks])
    });
  };
  
  async function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    const taskFiltered = finishedTasks.filter(item => item.id == id);
    const docRef = doc(db,uid,removeBarra(taskFiltered[0].content))
    await deleteDoc(docRef)
    .then(() => {
      setFinishedTasks(filter);
    });
  };
  async function fetchData() {
    const q = query(collectionGroup(db,uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      if (doc.id != "Infos" || undefined) {
        let r = doc.data()
        const taskObject = {
          content: recuperaBarra(r.content),
          date: r.date,
          id: r.id,
          isFinished:r.isFinished,
        };
        tasks.push(taskObject);
      }
    })
    const taskFalse = tasks.filter(item => item.isFinished == false);
    setTasks(taskFalse)
    const taskTrue = tasks.filter(item => item.isFinished == true);
    setFinishedTasks(taskTrue)
    setDownloadingTasks(false);
  }
   
  return (
    <NativeBaseProvider>
      <VStack>
        <Center>
          <StatusBar 
            backgroundColor={colors.blue_secondary}
          />
          <Header 
            newTaskIsVisible={newTaskIsVisible}
            setNewTaskIsVisible={setNewTaskIsVisible}
          />
          { newTaskIsVisible && <NewTask addNewTask={addNewTask} />}
          { downloadingTasks
            ? ( <Loading text={"Buscando Tarefas..."} fetchData={fetchData}/> )
            : (
              <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle ={{paddingBottom: 50}} >
                {tasks.map((item) => (
                  <Task key={item.id} data={item} action={(id) => taskCompleted(id)}/>
                ))}
                {finishedTasks.length !== 0 && (
                  <>
                    <View style={styles.containerDivision}>
                      <View style={styles.finishedLine} />
                      <Text style={styles.finishedText}>Finalizadas!</Text>
                      <View style={styles.finishedLine} />
                    </View>
                    {finishedTasks.map((item) => (
                      <Task key={item.id} data={item} action={(id) => deleteTask(id)} />
                    ))}
                  </>
                )}
              </ScrollView>
            )
          }
        </Center>
      </VStack>
    </NativeBaseProvider>
  )
}