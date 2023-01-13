import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

export  const UserProvider =  ({ children })  => {
    const [{ email, name, password, uid, logado, userNovo}, setCurrentUser] = useState({
        //displayName:'',
        email:'',
        name:'',
        password:'',
        uid:'',
        logado: false,
        userNovo: false,
    });
    async function changeUser({uid}) {
        console.log('passando pelo context')
        // let promise = new Promise ((resolve,reject)=>{
        //     setTimeout(()=> resolve(
        //         console.log(uid, 'antes do contex!!'),
        //         setCurrentUser({uid}),
        //         console.log(uid, 'dentro do context!!'),
        //         1000))            
        // });
        // let result = await promise;
        // console.log(result)
        let result = await Promise.resolve(setCurrentUser({uid}))
        console.log(result, 'Dentro do User?!')
        return {uid};
    }   
    return (
        <CurrentUserContext.Provider value={{ email, name, password, uid, logado, userNovo, setCurrentUser, changeUser }} >
            {children}
        </CurrentUserContext.Provider >
    )
}
