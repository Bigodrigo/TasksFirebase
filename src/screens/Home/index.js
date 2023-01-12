import React, { useState, useContext, useEffect, useCallback } from "react";
import { VStack, NativeBaseProvider, Center, StatusBar, View, Text, ScrollView } from "native-base";
//importar cores e estilos?
import { fonts, colors, styles } from "../../styles";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { Loading } from "../../components/Loading";

import { randomKey } from "../../utils/randomKey";
//import do fire deve tá errado!
import {  deleteDoc, doc, serverTimestamp, setDoc, getDoc, collection, query, where, getDocs, collectionGroup, withConverter } from "firebase/firestore";
import { db } from "../../firebase";
import { CurrentUserContext } from "../../components/Context/User";
import { taskConverter, TaskFB } from "../../utils/converter"; 
import { Login } from "../Login";

export function Home ({children}) {
  const [ tasks, setTasks ] = useState([]);
  const [ finishedTasks, setFinishedTasks ] = useState([]);
  const [ newTaskIsVisible, setNewTaskIsVisible ] = useState(false);
  const [ downloadingTasks, setDownloadingTasks ] = useState(true);
  //aqui tem q tirar o uid fixo e o downloading
  const {uid, name, email, password, setCurrentUser} = useContext(CurrentUserContext);
  const [fazerLogin, setFazerLogin] = useState(true);
  //teste
  //testar com LET o TaskObject em todos os coisas!!
  const docID = [];

  async function addNewTask(content) {   
    const taskObject = { 
      content: content,
      date: serverTimestamp(),
      id: randomKey(),
      isFinished: false,
    };
    const docRef = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1',taskObject.content).withConverter(taskConverter)
    await setDoc(docRef, new TaskFB(taskObject.content,taskObject.date,taskObject.id,taskObject.isFinished)) //sobrescreve!! {[taskObject.content]:taskObject},{merge:true} //,[taskObject.content]),taskObject
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
    const docRef = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1',taskObject.content).withConverter(taskConverter)
    await setDoc(docRef, new TaskFB(taskObject.content,taskObject.date,taskObject.id,taskObject.isFinished),{merge:true}) //sobrescreve!!,{merge:true}
    .then(() => {
      setFinishedTasks([taskObject, ...newFinishedTasks])
    });
  };
  
  async function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    const taskFiltered = finishedTasks.filter(item => item.id == id);
    console.log(taskFiltered[0].content)
    const docRef = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1',taskFiltered[0].content)
    await deleteDoc(docRef)
    .then(() => {
      setFinishedTasks(filter);
    });
  };
  const fetchData = async () => {
    const q = query(collectionGroup(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      docID.push(doc.id)
      console.log(docID)
      let r = doc.data()
      const taskObject = {
        content: r.content,
        date: r.date,
        id: r.id,
        isFinished:r.isFinished,
      };
      tasks.push(taskObject);
    })
    const taskFalse = tasks.filter(item => item.isFinished == false);
    setTasks(taskFalse)
    const taskTrue = tasks.filter(item => item.isFinished == true);
    setFinishedTasks(taskTrue)
      console.log(tasks)
      console.log(finishedTasks)
      //return docID
  }
  
  useEffect(() => {
    fetchData();
    console.log(fazerLogin)
    console.log(uid)
    // async function testingAwait() {
    //   console.log 
    //   let promise = new Promise((resolve, reject)=>{
    //     //resolve(uid!=null)
    //     setTimeout(()=>resolve('done!'),2000) 
    //   })
    //   let result = await promise
    //   console.log(result)
    //   console.log(uid)
    // }
    //  testingAwait();
      setDownloadingTasks(false);
  }, [])
              
  return (
    <NativeBaseProvider>
      { fazerLogin  ? <Login fazerLogin={fazerLogin} setFazerLogin={setFazerLogin}/>
      :
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
          <Text color='white'>{uid}</Text>
          <Text color='white'>{name}</Text>
          { downloadingTasks
            ? ( <Loading text={"Buscando Tarefas..."}/> )
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
      }
    </NativeBaseProvider>
  )
}