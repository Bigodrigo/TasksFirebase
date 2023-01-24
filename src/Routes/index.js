import React, { useContext } from 'react'
import { CurrentUserContext } from '../components/Context/User';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export default function Routes() {
    const { logado } = useContext(CurrentUserContext);
    return (
         logado  ? <Home /> : <Login />
    )
}