import React, { useState, useContext, useEffect, useCallback } from "react";
import { VStack, NativeBaseProvider, Center, StatusBar, View, Text, ScrollView } from "native-base";
//importar cores e estilos?
import { fonts, colors, styles } from "../../styles";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { Task } from "../../components/Task";
import { Loading } from "../../components/Loading";

import { randomKey } from "../../utils/randomKey";
import { set, Value } from "react-native-reanimated";
//import do fire deve tá errado!
import {  updateDoc, doc, serverTimestamp, setDoc, getDoc, deleteField, FieldPath, collection, query, where, getDocs, collectionGroup, withConverter, FieldValue } from "firebase/firestore";
import { db } from "../../firebase";
import { CurrentUserContext } from "../../components/Context/User";
import { taskConverter, TaskFB } from "../../utils/converter"; 
import { map } from "@firebase/util";

export function Home ({children}) {
  const [ tasks, setTasks ] = useState([]);
  const [ finishedTasks, setFinishedTasks ] = useState([]);
  const [ newTaskIsVisible, setNewTaskIsVisible ] = useState(false);
  const [ downloadingTasks, setDownloadingTasks ] = useState(false);
  //aqui tem q tirar o uid fixo e o downloading
  const {uid, name, email, password, logado} = useContext(CurrentUserContext);
  //teste
  const [docID, setDocID] = useState([]);

  async function addNewTask(content) {   
    const taskObject = { 
      content: content,
      date: serverTimestamp(),
      id: randomKey(),
      isFinished: false,
      //acho q teria q mudar isso em cima!
    };
    const docRef = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1',taskObject.content).withConverter(taskConverter)
    // const teste = doc(db,"User", uid).withConverter(userConverter);
    // const testeSnap = await getDoc(teste);
    //const colRef = doc(db,'User','T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1');
try{    await setDoc(docRef, new TaskFB(taskObject.content,taskObject.date,taskObject.id,taskObject.isFinished)) //sobrescreve!! {[taskObject.content]:taskObject},{merge:true} //,[taskObject.content]),taskObject
      .then(() => {
        setTasks([taskObject, ...tasks])
      });}   catch(err){
        console.log("error: ", err)
      }
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
    const docRef = collection(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1');
    await setDoc(doc(docRef,{[taskObject.content]:taskObject},{merge:true})) //sobrescreve!!
      .then(() => {
        setFinishedTasks([taskObject, ...newFinishedTasks])
      });
  };

  
  async function deleteTask(id) {
    const filter = finishedTasks.filter(item => item.id !== id);
    const taskFiltered = finishedTasks.filter(item => item.id == id);
    const docRef = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1','Tasks')
    console.log(taskFiltered[0].content)
    await updateDoc(docRef,{[taskFiltered[0].content]:deleteField()})
    .then(() => {
      setFinishedTasks(filter);
    });
  };

    // const fetchData = useCallback (async ()=>{
    //   await new Promise(resolve => setTimeout(resolve, 2000));
    //   console.log(uid);
    //   const data = doc(db,"Task", uid);//testar sem uid!!
    //   const dataSnap = await getDoc(teste);// to achando q vai dar errado pq teria q ser data uma coisa e snap outra!!
    //   if (dataSnap.exists()) {
    //     console.log("Achei Coisa!!");
    //     setData(data);
    //   } else {
    //     console.log("No such document!");
    //   }
    // },[])
    
    // useEffect(() => { // precisava testar tudo comentado e só um console log quando inicia, dai muda o loading pra false!!
    //   fetchData().catch(console.error);;
    //   // async function getTasksInFirestore() {//vou copiar tudo, mas era melhor usar as funções novas! getDoc(doc(db, 'Tasks', uid).where()) ou ,data().where?
    //   //   console.log(uid);
    //   //   const teste = doc(db,"Task", uid);//.withConverter(taskConverter);
    //   //   const testeSnap = await getDoc(teste);//posso tentar query varios docs!!
    //   //   if (testeSnap.exists()) {
    //   //     console.log("Achei Coisa!!");
    //   //   } else {
    //   //     console.log("No such document!");
    //   //   }
    //     //const testeDoc = await getDoc(doc(db, 'Tasks', uid),{[taskObject.content]:taskObject})
    //     //.then(() => {
    //       // if (testeDoc.exists()) {
    //       //  console.log("Existe viu!!")
    //       //   setTasks([taskObject, ...tasks])

    //       //   async(userCredential) => {
    //       //     console.log("teste login entrou!");
    //       //     let user = userCredential.user;
    //       //     const uid = user.uid;

    //       // const q = query(collection(db,"Task", uid), where("isFinished", "==", false));

    //       // const querySnapshot = await getDocs(q);
    //       // querySnapshot.forEach((doc), => {
    //       //   // doc.data() is never undefined for query doc snapshots
    //       //   console.log(doc.id, " => ", doc.data());
    //       // });
    

    //       //console.log("Document data:", tasks.data());
    //       // forEach(FieldValue=>console.log("Document id:", tasks.get(FieldValue)));
    //       // let tasksResponse = [];
    //       // tasks.get(FieldPath).then(() => {
    //       //   map(item => tasksResponse.push(item.data()));
    //       // })
    //       // console.log(tasksResponse)
    //       // let teste = await getDoc(doc(db, 'Tasks', 'pA3FR6oZagPqfCPHXaQRllskEUl1'));
    //       // teste.forEach(FieldValue,item=>console.log(item))
    //       // console.log("Document id:", teste.data());
    //       // tasks.forEach((key) => {
    //       //   map(item => teste.push(item.value()));
    //       // });
    //       // teste = tasks.data().val
    //       //let tasksResponse = [];
    //       //tasks.FieldPath.map(item => tasksResponse.push(item.data()));
    //       //console.log(data())
    //       //console.log(tasksResponse)
    //       //setTasks(tasksResponse);
    //   //})
    //     //  tasks.forEach((FieldValue) => {
    //     //    // doc.data() is never undefined for query doc snapshots
    //     //    console.log(FieldValue, " => ", data()); 
    //     //getDoc(doc(db, 'Tasks', uid),data()).where('isFinished','==',false)).orderBy('date','asc')
    //   //   .then(() => {
    //   //     let tasksResponse = [];
    //   //     console.log(tasksResponse)
    //   //     map(item => tasksResponse.push(item.data()));
    //   //     console.log(data())
    //   //     setTasks(tasksResponse);
    //   //   });
    //   //   const tasksFinished = getDoc(doc(db, 'Tasks', uid).data().where('isFinished','==',true)).orderBy('date','desc')
    //   //   .then(() => {
    //   //     let tasksFinishedResponse = [];
    //   //     console.log(tasksFinishedResponse)
    //   //     map(item => tasksFinishedResponse.push(item.data()));
    //   //     setTasks(tasksFinishedResponse);
    //     //});
    //     //getTasksInFirestore();
    //     setDownloadingTasks(false);
    //   //};
    // }, [fetchData]);

            useEffect(() => {
              const fetchData = async () => {
                const q = query(collectionGroup(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1'));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (doc) => {
                  //console.log(doc.id, " => ", doc.data());
                  //console.log(doc.id)
                  docID.push(doc.id)
                  console.log(docID)
                  let r = doc.data()
                  //console.log(r)
                  const taskObject = {
                    content: r.content,
                    date: r.date,
                    id: r.id,
                    isFinished:r.isFinished,
                  };
                  tasks.push(taskObject);
                  console.log(taskObject)
                  //setTasks([...tasks, tasks.push(taskObject)])
                  console.log(tasks)
                  return docID
                });
              }
              //console.log(docID)
              // const fetchData = async () => {
              //   await fetchDocs();
              //   docID.forEach(async (item) => {
              //       const teste = doc(db,'T5j3lgQdt2QPrlOT1Jfqvx3O2Ds1',item).withConverter(taskConverter);
              //       const testeSnap = await getDoc(teste);
          
              //       if (testeSnap.exists()) {
              //         const rod = testeSnap.data();
              //         //console.log(rod.toString());
              //           const taskObject = {
              //             content: rod[TaskFB].content,
              //             date: rod[TaskFB].date,
              //             id: rod[TaskFB].id,
              //             isFinished:rod[TaskFB].isFinished,
              //           };
              //           setTasks([taskObject, ...tasks])
              //           //console.log(tasks)
                      

              //         //console.log(taskObject)
              //         //setTasks([taskObject, ...tasks])
              //       } else {
              //         // doc.data() will be undefined in this case
              //         console.log("No such document!");
              //       }
              //     })
              // }
                fetchData();
                setDownloadingTasks(false);
            }, [])
              

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