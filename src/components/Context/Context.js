import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [user, setUser] = useState();
    const [uid, setUid] = useState();

    function login() {
        setLogado(logado=true)
    }

    function logout() {
        setLogado(logado=false)
    }

    return (
        <UserContext.Provider value={{ logado, setLogado, login, logout, user, setUser, uid, setUid}} >
            {children}
        </UserContext.Provider >
    )
}
