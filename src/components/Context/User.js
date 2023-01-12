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
        <CurrentUserContext.Provider value={{ email, name, password, uid, logado, setCurrentUser }} >
            {children}
        </CurrentUserContext.Provider >
    )
}
