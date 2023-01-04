import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

export  const UserProvider =  ({ children })  => {
    const [{ email, name, password, uid, logado}, setCurrentUser] = useState({
        //displayName:'',
        email:'',
        name:'',
        password:'',
        uid:'',
        logado: false,
    });

    
    return (
        <CurrentUserContext.Provider value={{ 
            //logado, setLogado, login, logout, currentUser, uid, email,setUid
            email, name, password, uid, logado, setCurrentUser,
        }} >
            {children}
        </CurrentUserContext.Provider >
    )
}

//       onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
  
// });

    // function login() {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    //                 setCurrentUser(userCredential.user);
    //                 setUid(user.uid);
    //                 console.log(uid);
    //     });
    //     setLogado(logado=true);
    // }})

    // function logout() {
    //     setLogado(logado=false)
    // }