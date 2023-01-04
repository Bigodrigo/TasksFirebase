import React, { useState, useContext, useEffect } from "react";
import { VStack, NativeBaseProvider, Center, StatusBar, View, Text, ScrollView } from "native-base";
//importar cores e estilos?
import { fonts, colors, styles } from "../styles";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { Loading } from "../../components/Loading";

import { randomKey } from "../utils/randomKey";
import { set } from "react-native-reanimated";
//import do fire deve tá errado!
import {  updateDoc, doc, serverTimestamp, setDoc, getDoc, deleteField, FieldPath, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CurrentUserContext } from "../../components/Context/User";
import { taskConverter } from "../utils/converter"; 

export function Home ({children}) {
  const [ tasks, setTasks ] = useState([]);
  const [ finishedTasks, setFinishedTasks ] = useState([]);
  const [ newTaskIsVisible, setNewTaskIsVisible ] = useState(false);
  const [ downloadingTasks, setDownloadingTasks ] = useState(true);
  //aqui tem q tirar o uid fixo e o downloading
  const {uid, name, email, password, logado} = useContext(CurrentUserContext);

  async function addNewTask(content) {   
    const taskObject = { 
      content: content,
      date: serverTimestamp(),
      id: randomKey(),
      isFinished: false,
      //acho q teria q mudar isso em cima!
    };
    //const docRef = doc(db, 'Tasks', uid)
    await setDoc(doc(db, 'Tasks', uid),{[taskObject.content]:taskObject},{merge:true}) //sobrescreve!!
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
      //copiar o date now?
    };

    await setDoc(doc(db, 'Tasks', uid),{[taskObject.content]:taskObject},{merge:true}) //sobrescreve!!
      .then(() => {
        setFinishedTasks([taskObject, ...newFinishedTasks])
      });
  };

  
  async function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    const taskFiltered = finishedTasks.filter(item => item.id == id);
    const docRef = doc(db, 'Tasks', uid)
    console.log(taskFiltered[0].content)
    await updateDoc(docRef,{[taskFiltered[0].content]:deleteField()})
    .then(() => {
      setFinishedTasks(filter);
    });
  };
  
  useEffect(() => { // precisava testar tudo comentado e só um console log quando inicia, dai muda o loading pra false!!
    async function getTasksInFirestore() {//vou copiar tudo, mas era melhor usar as funções novas! getDoc(doc(db, 'Tasks', uid).where()) ou ,data().where?
      // const teste = doc(db,"Task", uid);//.withConverter(taskConverter);
      // const testeSnap = await getDoc(teste);//posso tentar query varios docs!!
      // if (testeSnap.exists()) {
      //   console.log("Achei Coisa!!");
      // } else {
      //   console.log("No such document!");
      // }
       //const testeDoc = await getDoc(doc(db, 'Tasks', uid),{[taskObject.content]:taskObject})
      //.then(() => {
        // if (testeDoc.exists()) {
        //  console.log("Existe viu!!")
        //   setTasks([taskObject, ...tasks])

        //   async(userCredential) => {
        //     console.log("teste login entrou!");
        //     let user = userCredential.user;
        //     const uid = user.uid;

        // const q = query(collection(db,"Task", uid), where("isFinished", "==", false));

        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc), => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        // });
  

        //console.log("Document data:", tasks.data());
        // forEach(FieldValue=>console.log("Document id:", tasks.get(FieldValue)));
        // let tasksResponse = [];
        // tasks.get(FieldPath).then(() => {
        //   map(item => tasksResponse.push(item.data()));
        // })
        // console.log(tasksResponse)
        // let teste = await getDoc(doc(db, 'Tasks', 'pA3FR6oZagPqfCPHXaQRllskEUl1'));
        // teste.forEach(FieldValue,item=>console.log(item))
        // console.log("Document id:", teste.data());
        // tasks.forEach((key) => {
        //   map(item => teste.push(item.value()));
        // });
        // teste = tasks.data().val
        //let tasksResponse = [];
        //tasks.FieldPath.map(item => tasksResponse.push(item.data()));
        //console.log(data())
        //console.log(tasksResponse)
        //setTasks(tasksResponse);
    //})
      //  tasks.forEach((FieldValue) => {
      //    // doc.data() is never undefined for query doc snapshots
      //    console.log(FieldValue, " => ", data()); 
       //getDoc(doc(db, 'Tasks', uid),data()).where('isFinished','==',false)).orderBy('date','asc')
    //   .then(() => {
    //     let tasksResponse = [];
    //     console.log(tasksResponse)
    //     map(item => tasksResponse.push(item.data()));
    //     console.log(data())
    //     setTasks(tasksResponse);
    //   });
    //   const tasksFinished = getDoc(doc(db, 'Tasks', uid).data().where('isFinished','==',true)).orderBy('date','desc')
    //   .then(() => {
    //     let tasksFinishedResponse = [];
    //     console.log(tasksFinishedResponse)
    //     map(item => tasksFinishedResponse.push(item.data()));
    //     setTasks(tasksFinishedResponse);
      //});
      setDownloadingTasks(false);
    };
     getTasksInFirestore();
  }, []);

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
    </NativeBaseProvider>
  )
}