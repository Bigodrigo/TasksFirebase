import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

export  const UserProvider =  ({ children })  => {
    const [{ email, name, password, uid, userNovo}, setCurrentUser] = useState({
        //displayName:'',
        email:'',
        name:'',
        password:'',
        uid:'',
        userNovo: false,
    });
    async function changeUser({uid}) {
        let result = await Promise.resolve(setCurrentUser({uid}))
        console.log(result, 'Dentro do User?!')
        return {uid};
    }
    const [logado, setLogado] = useState();

    function login() {
        setLogado(true)
    }

    function logout() {
        setLogado(false)
    }   
    return (
        <CurrentUserContext.Provider value={{ email, name, password, uid, userNovo, setCurrentUser, changeUser, logado, login, logout }} >
            {children}
        </CurrentUserContext.Provider >
    )
}
