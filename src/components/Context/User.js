//O Context é uma ferramente bem útil para manter variáveis acessíveis em toda a aplicação! Nesse caso estou mais preocupado com o usuário e seu login!
import { createContext, useState, useContext } from "react";

export const CurrentUserContext = createContext();

export  const UserProvider =  ({ children })  => {
    const [{ email, name, uid, userNovo}, setCurrentUser] = useState({
        email:'',
        name:'',
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
        <CurrentUserContext.Provider value={{ email, name, uid, userNovo, setCurrentUser, changeUser, logado, login, logout }} >
            {children}
        </CurrentUserContext.Provider >
    )
}
