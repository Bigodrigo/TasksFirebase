import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

export  const UserProvider =  ({ children })  => {
    const [{ email, name, password, uid, logado}, setCurrentUser] = useState({
        //displayName:'',
        email:'',
        name:'',
        password:'',
        uid:'',
        //logado: false,
    });
    async function changeUid({uid}) {
        console.log('passando pelo context')
        let promise = new Promise ((resolve)=>{
            console.log(uid, 'antes do contex!!')
            setCurrentUser({uid})
            console.log(uid, 'dentro do context!!')
            return uid
        });
        //let result = await promise;
        //console.log(result)
        await promise
    }   
    return (
        <CurrentUserContext.Provider value={{ email, name, password, uid, logado, setCurrentUser, changeUid }} >
            {children}
        </CurrentUserContext.Provider >
    )
}
